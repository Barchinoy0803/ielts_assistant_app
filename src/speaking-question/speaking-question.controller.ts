import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingQuestionService } from './speaking-question.service';
import { CreateSpeakingQuestionDto } from './dto/create-speaking-question.dto';
import { UpdateSpeakingQuestionDto } from './dto/update-speaking-question.dto';

@Controller('speaking-question')
export class SpeakingQuestionController {
  constructor(private readonly speakingQuestionService: SpeakingQuestionService) {}

  @Post()
  create(@Body() createSpeakingQuestionDto: CreateSpeakingQuestionDto) {
    return this.speakingQuestionService.create(createSpeakingQuestionDto);
  }

  @Get()
  findAll() {
    return this.speakingQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingQuestionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingQuestionDto: UpdateSpeakingQuestionDto) {
    return this.speakingQuestionService.update(id, updateSpeakingQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingQuestionService.remove(id);
  }
}
