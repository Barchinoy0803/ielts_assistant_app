import { Module } from '@nestjs/common';
import { ReadingQuestionService } from './reading-question.service';
import { ReadingQuestionController } from './reading-question.controller';

@Module({
  controllers: [ReadingQuestionController],
  providers: [ReadingQuestionService],
})
export class ReadingQuestionModule {}
