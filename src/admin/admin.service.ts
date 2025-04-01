import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  async register(createAdminDto: CreateAdminDto) {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async login(createAdminDto: CreateAdminDto) {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }
  
  async findAll() {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: number) {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: number) {
    try {
      
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
