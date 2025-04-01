import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WritingTaskService } from './writing-task.service';
import { CreateWritingTaskDto } from './dto/create-writing-task.dto';
import { UpdateWritingTaskDto } from './dto/update-writing-task.dto';

@Controller('writing-task')
export class WritingTaskController {
  constructor(private readonly writingTaskService: WritingTaskService) {}

  @Post()
  create(@Body() createWritingTaskDto: CreateWritingTaskDto) {
    return this.writingTaskService.create(createWritingTaskDto);
  }

  @Get()
  findAll() {
    return this.writingTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writingTaskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritingTaskDto: UpdateWritingTaskDto) {
    return this.writingTaskService.update(id, updateWritingTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writingTaskService.remove(id);
  }
}
