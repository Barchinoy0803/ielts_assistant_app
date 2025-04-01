import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingVariantService } from './speaking-variant.service';
import { CreateSpeakingVariantDto } from './dto/create-speaking-variant.dto';
import { UpdateSpeakingVariantDto } from './dto/update-speaking-variant.dto';

@Controller('speaking-variant')
export class SpeakingVariantController {
  constructor(private readonly speakingVariantService: SpeakingVariantService) {}

  @Post()
  create(@Body() createSpeakingVariantDto: CreateSpeakingVariantDto) {
    return this.speakingVariantService.create(createSpeakingVariantDto);
  }

  @Get()
  findAll() {
    return this.speakingVariantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingVariantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingVariantDto: UpdateSpeakingVariantDto) {
    return this.speakingVariantService.update(id, updateSpeakingVariantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingVariantService.remove(id);
  }
}
