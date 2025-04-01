import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpeakingVariantDto } from './dto/create-speaking-variant.dto';
import { UpdateSpeakingVariantDto } from './dto/update-speaking-variant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakingVariantService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSpeakingVariantDto: CreateSpeakingVariantDto) {
    try {
      let speakingVariant = await this.prisma.speaking_Variant.create({ data: createSpeakingVariantDto })
      return speakingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let speakingVariants = await this.prisma.speaking_Variant.findMany()
      if (!speakingVariants.length) return new HttpException("Not found!", HttpStatus.NOT_FOUND)
      return speakingVariants
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let speakingVariant = await this.prisma.speaking_Variant.findUnique({ where: { id } })
      if (!speakingVariant) return new HttpException("Not found!", HttpStatus.NOT_FOUND)
      return speakingVariant
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateSpeakingVariantDto: UpdateSpeakingVariantDto) {
    try {
      let updated = await this.prisma.speaking_Variant.update({
        data: updateSpeakingVariantDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.speaking_Variant.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
