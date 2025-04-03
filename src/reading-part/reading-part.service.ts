import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReadingPartDto } from './dto/create-reading-part.dto';
import { UpdateReadingPartDto } from './dto/update-reading-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingPartService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createReadingPartDto: CreateReadingPartDto) {
    try {
      let part = await this.prisma.reading_Part.create({ data: createReadingPartDto })
      return part
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let parts = await this.prisma.reading_Part.findMany({
        include: {
          Reading_Part_Question: true,
          reading_variant: true
        }
      })
      if (!parts.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return parts
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let part = await this.prisma.reading_Part.findUnique({
        where: { id },
        include: {
          Reading_Part_Question: true,
          reading_variant: true
        }
      })
      if (!part) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return part
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateReadingPartDto: UpdateReadingPartDto) {
    try {
      let updated = await this.prisma.reading_Part.update({
        data: updateReadingPartDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.reading_Part.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
