import { Module } from '@nestjs/common';
import { WritingTaskService } from './writing-task.service';
import { WritingTaskController } from './writing-task.controller';

@Module({
  controllers: [WritingTaskController],
  providers: [WritingTaskService],
})
export class WritingTaskModule {}
