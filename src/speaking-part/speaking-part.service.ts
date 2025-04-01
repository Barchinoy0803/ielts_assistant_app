import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpeakingPartDto } from './dto/create-speaking-part.dto';
import { UpdateSpeakingPartDto } from './dto/update-speaking-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakingPartService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSpeakingPartDto: CreateSpeakingPartDto) {
    try {
      let speakingPart = await this.prisma.speaking_Part.create({ data: createSpeakingPartDto })
      return speakingPart
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let speakingParts = await this.prisma.speaking_Part.findMany()
      if (!speakingParts.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return speakingParts
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let speakingPart = await this.prisma.speaking_Part.findUnique({ where: { id } })
      if (!speakingPart) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return speakingPart
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateSpeakingPartDto: UpdateSpeakingPartDto) {
    try {
      let updated = await this.prisma.speaking_Part.update({
        data: updateSpeakingPartDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.speaking_Part.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
