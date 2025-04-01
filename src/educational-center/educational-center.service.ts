import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEducationalCenterDto } from './dto/create-educational-center.dto';
import { UpdateEducationalCenterDto } from './dto/update-educational-center.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import { LoginCenterDto } from './dto/login-center.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EducationalCenterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) { }

  async findByEmail(email: string) {
    try {
      let center = await this.prisma.center.findUnique({
        where: { email: email }
      });

      if (!center) {
        throw new NotFoundException("Center not found");
      }

      return center;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async register(createEducationalCenterDto: CreateEducationalCenterDto) {
    try {
      let { email, password } = createEducationalCenterDto
      let center = await this.findByEmail(email)
      if (!center) return new HttpException("Already exists", HttpStatus.ALREADY_REPORTED)
      let hashPassword = bcrypt.hashSync(password, 10)
      let newCenter = { ...createEducationalCenterDto, password: hashPassword }
      await this.prisma.center.create({ data: newCenter })
      return newCenter
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async login(loginCenterDto: LoginCenterDto) {
    try {
      let { email, password } = loginCenterDto
      let center = await this.findByEmail(email)
      if (!center) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      let matchpassword = bcrypt.compareSync(password, center.password)
      if (!matchpassword) return new HttpException("Wrong crediantials", HttpStatus.BAD_REQUEST)
      return {
        access_token: this.generateAccessToken({ id: center.id }),
        refresh_token: this.generateRefreshToken({ id: center.id })
      };
    } catch (error) {
      return new BadRequestException(error)
    }
  }


  refreshToken(req: Request) {
    let { id, name } = req['user'];
    return { access_token: this.generateAccessToken({ id, name }) };
  }


  generateRefreshToken(payload: any) {
    return this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: '30d'
    })
  }


  generateAccessToken(payload: any) {
    return this.jwtService.sign(payload, {
      secret: process.env.ACCESS_KEY,
      expiresIn: '15m',
    });
  }
  
  async findAll() {
    try {
      let center = await this.prisma.center.findMany()
      if (!center.length) return new HttpException("not found!", HttpStatus.NOT_FOUND)
      return center
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let center = await this.prisma.center.findUnique({ where: { id } })
      if (!center) return new HttpException("not found!", HttpStatus.NOT_FOUND)
      return center
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateEducationalCenterDto: UpdateEducationalCenterDto) {
    try {
      let updated = await this.prisma.center.update({
        data: updateEducationalCenterDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.center.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
