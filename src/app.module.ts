import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationalCenterModule } from './educational-center/educational-center.module';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';
import { PrismaModule } from './prisma/prisma.module';
import { RegionModule } from './region/region.module';
import { ReadingVariantModule } from './reading-variant/reading-variant.module';
import { ReadingPartModule } from './reading-part/reading-part.module';
import { ReadingPartQuestionModule } from './reading-part-question/reading-part-question.module';
import { ReadingQuestionModule } from './reading-question/reading-question.module';
import { WritingVariantModule } from './writing-variant/writing-variant.module';
import { WritingTaskOverviewModule } from './writing-task-overview/writing-task-overview.module';
import { WritingTaskModule } from './writing-task/writing-task.module';
import { SpeakingVariantModule } from './speaking-variant/speaking-variant.module';
import { SpeakingPartModule } from './speaking-part/speaking-part.module';
import { SpeakingQuestionModule } from './speaking-question/speaking-question.module';
import { ResultModule } from './result/result.module';
import { ExamModule } from './exam/exam.module';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EducationalCenterModule, TeacherModule, GroupModule, StudentModule, PrismaModule, RegionModule, ReadingVariantModule, ReadingPartModule, ReadingPartQuestionModule, ReadingQuestionModule, WritingVariantModule, WritingTaskOverviewModule, WritingTaskModule, SpeakingVariantModule, SpeakingPartModule, SpeakingQuestionModule, ResultModule, ExamModule, AdminModule, MailModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
