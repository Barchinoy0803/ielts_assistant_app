import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WritingTaskOverviewService } from './writing-task-overview.service';
import { CreateWritingTaskOverviewDto } from './dto/create-writing-task-overview.dto';
import { UpdateWritingTaskOverviewDto } from './dto/update-writing-task-overview.dto';

@Controller('writing-task-overview')
export class WritingTaskOverviewController {
  constructor(private readonly writingTaskOverviewService: WritingTaskOverviewService) {}

  @Post()
  create(@Body() createWritingTaskOverviewDto: CreateWritingTaskOverviewDto) {
    return this.writingTaskOverviewService.create(createWritingTaskOverviewDto);
  }

  @Get()
  findAll() {
    return this.writingTaskOverviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writingTaskOverviewService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritingTaskOverviewDto: UpdateWritingTaskOverviewDto) {
    return this.writingTaskOverviewService.update(id, updateWritingTaskOverviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writingTaskOverviewService.remove(id);
  }
}
