import { Injectable } from '@nestjs/common';
import { CreateEducationalCenterDto } from './dto/create-educational-center.dto';
import { UpdateEducationalCenterDto } from './dto/update-educational-center.dto';

@Injectable()
export class EducationalCenterService {
  create(createEducationalCenterDto: CreateEducationalCenterDto) {
    return 'This action adds a new educationalCenter';
  }

  findAll() {
    return `This action returns all educationalCenter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationalCenter`;
  }

  update(id: number, updateEducationalCenterDto: UpdateEducationalCenterDto) {
    return `This action updates a #${id} educationalCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationalCenter`;
  }
}
