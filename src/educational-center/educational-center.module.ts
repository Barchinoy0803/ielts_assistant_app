import { Module } from '@nestjs/common';
import { EducationalCenterService } from './educational-center.service';
import { EducationalCenterController } from './educational-center.controller';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [JwtModule.register({ global: true })],
  controllers: [EducationalCenterController],
  providers: [EducationalCenterService, MailService],
})
export class EducationalCenterModule {}
