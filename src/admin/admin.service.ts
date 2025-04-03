import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import { MailService } from 'src/mail/mail.service';
import { REGISTER_STATUS } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService
  ) { }

  async findByEmail(email: string) {
    try {
      let admin = await this.prisma.admin.findFirst({ where: { email } })
      return admin
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async register(createAdminDto: CreateAdminDto) {
    try {
      let { email, password } = createAdminDto;
      let admin = await this.findByEmail(email);
      if (admin) throw new HttpException("Already exists!", HttpStatus.ALREADY_REPORTED);

      let hashPassword = await bcrypt.hash(password, 10);
      let newUser = {
        ...createAdminDto,
        password: hashPassword
      };

      let created = await this.prisma.admin.create({ data: newUser });
      await this.mailService.sendOtpToEmail(email);
      return created;
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async activate(email: string, otp: string) {
    try {
      let admin = await this.prisma.admin.findFirst({ where: { email } })
      if (!admin) return new UnauthorizedException("not found!")
      if (admin.status == REGISTER_STATUS.ACTIVE) return new HttpException("Already activated, please login!", HttpStatus.ALREADY_REPORTED)
      await this.mailService.activate(otp)
      await this.prisma.admin.update({ where: { email }, data: { status: REGISTER_STATUS.ACTIVE } })
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async login(createAdminDto: CreateAdminDto) {
    try {
      let { email, password } = createAdminDto;

      let admin = await this.prisma.admin.findFirst({ where: { email } });

      if (!admin) throw new NotFoundException("Admin not found!");

      let matchPassword = await bcrypt.compare(password, admin.password);
      if (!matchPassword) throw new BadRequestException("Wrong credentials!");

      if (admin.status === REGISTER_STATUS.INACTIVE) {
        throw new BadRequestException("Your email is not activated, please activate");
      }

      return {
        access_token: this.generateAccessToken({ id: admin.id, role: admin.role }),
        refresh_token: this.generateRefreshToken({ id: admin.id, role: admin.role })
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
      let admins = await this.prisma.admin.findMany()
      return admins
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    try {
      let updated = await this.prisma.admin.update({
        data: updateAdminDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.admin.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
