import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WritingVariantService } from './writing-variant.service';
import { CreateWritingVariantDto } from './dto/create-writing-variant.dto';
import { UpdateWritingVariantDto } from './dto/update-writing-variant.dto';

@Controller('writing-variant')
export class WritingVariantController {
  constructor(private readonly writingVariantService: WritingVariantService) {}

  @Post()
  create(@Body() createWritingVariantDto: CreateWritingVariantDto) {
    return this.writingVariantService.create(createWritingVariantDto);
  }

  @Get()
  findAll() {
    return this.writingVariantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writingVariantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritingVariantDto: UpdateWritingVariantDto) {
    return this.writingVariantService.update(id, updateWritingVariantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writingVariantService.remove(id);
  }
}
