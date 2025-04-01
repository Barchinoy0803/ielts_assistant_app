import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingPartQuestionService } from './reading-part-question.service';
import { CreateReadingPartQuestionDto } from './dto/create-reading-part-question.dto';
import { UpdateReadingPartQuestionDto } from './dto/update-reading-part-question.dto';

@Controller('reading-part-question')
export class ReadingPartQuestionController {
  constructor(private readonly readingPartQuestionService: ReadingPartQuestionService) {}

  @Post()
  create(@Body() createReadingPartQuestionDto: CreateReadingPartQuestionDto) {
    return this.readingPartQuestionService.create(createReadingPartQuestionDto);
  }

  @Get()
  findAll() {
    return this.readingPartQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingPartQuestionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingPartQuestionDto: UpdateReadingPartQuestionDto) {
    return this.readingPartQuestionService.update(id, updateReadingPartQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingPartQuestionService.remove(id);
  }
}
