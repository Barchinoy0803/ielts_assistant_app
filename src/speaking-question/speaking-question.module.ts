import { Module } from '@nestjs/common';
import { SpeakingQuestionService } from './speaking-question.service';
import { SpeakingQuestionController } from './speaking-question.controller';

@Module({
  controllers: [SpeakingQuestionController],
  providers: [SpeakingQuestionService],
})
export class SpeakingQuestionModule {}
