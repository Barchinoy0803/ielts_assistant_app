import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWritingVariantDto } from './dto/create-writing-variant.dto';
import { UpdateWritingVariantDto } from './dto/update-writing-variant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingVariantService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createWritingVariantDto: CreateWritingVariantDto) {
    try {
      let writingVariant = await this.prisma.writing_Variant.create({ data: createWritingVariantDto })
      return writingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let writingVariants = await this.prisma.writing_Variant.findMany()
      if (!writingVariants.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingVariants
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let writingVariant = await this.prisma.writing_Variant.findUnique({ where: { id } })
      if (!writingVariant) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateWritingVariantDto: UpdateWritingVariantDto) {
    try {
      let updated = await this.prisma.writing_Variant.update({
        data: updateWritingVariantDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.writing_Variant.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
