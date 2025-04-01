import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpeakingQuestionDto } from './dto/create-speaking-question.dto';
import { UpdateSpeakingQuestionDto } from './dto/update-speaking-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakingQuestionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSpeakingQuestionDto: CreateSpeakingQuestionDto) {
    try {
      let question = await this.prisma.speaking_Question.create({ data: createSpeakingQuestionDto })
      return question
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let questions = await this.prisma.speaking_Question.findMany()
      if (!questions.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return questions
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let questions = await this.prisma.speaking_Question.findMany()
      if (!questions.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return questions
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateSpeakingQuestionDto: UpdateSpeakingQuestionDto) {
    try {
      let updated = await this.prisma.speaking_Question.update({
        data: updateSpeakingQuestionDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.speaking_Question.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
