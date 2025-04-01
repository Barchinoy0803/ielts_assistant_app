import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReadingVariantDto } from './dto/create-reading-variant.dto';
import { UpdateReadingVariantDto } from './dto/update-reading-variant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingVariantService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createReadingVariantDto: CreateReadingVariantDto) {
    try {
      let readingVariant = await this.prisma.reading_Variant.create({ data: createReadingVariantDto })
      return readingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let readingVariants = await this.prisma.reading_Variant.findMany()
      if (!readingVariants.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return readingVariants
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let readingVariant = await this.prisma.reading_Variant.findUnique({ where: { id } })
      if (!readingVariant) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return readingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateReadingVariantDto: UpdateReadingVariantDto) {
    try {
      let updated = await this.prisma.reading_Variant.update({
        data: updateReadingVariantDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.reading_Variant.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
