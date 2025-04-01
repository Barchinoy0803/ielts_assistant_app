import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingPartService } from './speaking-part.service';
import { CreateSpeakingPartDto } from './dto/create-speaking-part.dto';
import { UpdateSpeakingPartDto } from './dto/update-speaking-part.dto';

@Controller('speaking-part')
export class SpeakingPartController {
  constructor(private readonly speakingPartService: SpeakingPartService) {}

  @Post()
  create(@Body() createSpeakingPartDto: CreateSpeakingPartDto) {
    return this.speakingPartService.create(createSpeakingPartDto);
  }

  @Get()
  findAll() {
    return this.speakingPartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingPartService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingPartDto: UpdateSpeakingPartDto) {
    return this.speakingPartService.update(id, updateSpeakingPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingPartService.remove(id);
  }
}
