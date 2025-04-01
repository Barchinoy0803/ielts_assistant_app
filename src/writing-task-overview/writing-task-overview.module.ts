import { Module } from '@nestjs/common';
import { WritingTaskOverviewService } from './writing-task-overview.service';
import { WritingTaskOverviewController } from './writing-task-overview.controller';

@Module({
  controllers: [WritingTaskOverviewController],
  providers: [WritingTaskOverviewService],
})
export class WritingTaskOverviewModule {}
