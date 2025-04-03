import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationalCenterService } from './educational-center.service';
import { CreateEducationalCenterDto } from './dto/create-educational-center.dto';
import { UpdateEducationalCenterDto } from './dto/update-educational-center.dto';

@Controller('educational-center')
export class EducationalCenterController {
  constructor(private readonly educationalCenterService: EducationalCenterService) {}

  @Post('register')
  register(@Body() createEducationalCenterDto: CreateEducationalCenterDto) {
    return this.educationalCenterService.register(createEducationalCenterDto);
  }

  @Post('login')
  login(@Body() createEducationalCenterDto: CreateEducationalCenterDto) {
    return this.educationalCenterService.login(createEducationalCenterDto);
  }


  @Get()
  findAll() {
    return this.educationalCenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationalCenterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationalCenterDto: UpdateEducationalCenterDto) {
    return this.educationalCenterService.update(id, updateEducationalCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationalCenterService.remove(id);
  }
}
