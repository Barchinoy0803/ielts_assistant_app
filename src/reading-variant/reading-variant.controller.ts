import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingVariantService } from './reading-variant.service';
import { CreateReadingVariantDto } from './dto/create-reading-variant.dto';
import { UpdateReadingVariantDto } from './dto/update-reading-variant.dto';

@Controller('reading-variant')
export class ReadingVariantController {
  constructor(private readonly readingVariantService: ReadingVariantService) {}

  @Post()
  create(@Body() createReadingVariantDto: CreateReadingVariantDto) {
    return this.readingVariantService.create(createReadingVariantDto);
  }

  @Get()
  findAll() {
    return this.readingVariantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingVariantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingVariantDto: UpdateReadingVariantDto) {
    return this.readingVariantService.update(id, updateReadingVariantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingVariantService.remove(id);
  }
}
