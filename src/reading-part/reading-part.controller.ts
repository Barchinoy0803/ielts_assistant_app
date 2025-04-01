import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingPartService } from './reading-part.service';
import { CreateReadingPartDto } from './dto/create-reading-part.dto';
import { UpdateReadingPartDto } from './dto/update-reading-part.dto';

@Controller('reading-part')
export class ReadingPartController {
  constructor(private readonly readingPartService: ReadingPartService) {}

  @Post()
  create(@Body() createReadingPartDto: CreateReadingPartDto) {
    return this.readingPartService.create(createReadingPartDto);
  }

  @Get()
  findAll() {
    return this.readingPartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingPartService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingPartDto: UpdateReadingPartDto) {
    return this.readingPartService.update(id, updateReadingPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingPartService.remove(id);
  }
}
