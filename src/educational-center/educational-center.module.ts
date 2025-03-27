import { Module } from '@nestjs/common';
import { EducationalCenterService } from './educational-center.service';
import { EducationalCenterController } from './educational-center.controller';

@Module({
  controllers: [EducationalCenterController],
  providers: [EducationalCenterService],
})
export class EducationalCenterModule {}
