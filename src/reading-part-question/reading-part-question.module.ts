import { Module } from '@nestjs/common';
import { ReadingPartQuestionService } from './reading-part-question.service';
import { ReadingPartQuestionController } from './reading-part-question.controller';

@Module({
  controllers: [ReadingPartQuestionController],
  providers: [ReadingPartQuestionService],
})
export class ReadingPartQuestionModule {}
