import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationalCenterModule } from './educational-center/educational-center.module';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EducationalCenterModule, TeacherModule, GroupModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
