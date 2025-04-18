import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, MailService],
})
export class AdminModule {}
