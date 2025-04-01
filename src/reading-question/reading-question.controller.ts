import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingQuestionService } from './reading-question.service';
import { CreateReadingQuestionDto } from './dto/create-reading-question.dto';
import { UpdateReadingQuestionDto } from './dto/update-reading-question.dto';

@Controller('reading-question')
export class ReadingQuestionController {
  constructor(private readonly readingQuestionService: ReadingQuestionService) {}

  @Post()
  create(@Body() createReadingQuestionDto: CreateReadingQuestionDto) {
    return this.readingQuestionService.create(createReadingQuestionDto);
  }

  @Get()
  findAll() {
    return this.readingQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingQuestionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingQuestionDto: UpdateReadingQuestionDto) {
    return this.readingQuestionService.update(id, updateReadingQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingQuestionService.remove(id);
  }
}
