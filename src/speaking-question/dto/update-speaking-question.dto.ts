import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingQuestionDto } from './create-speaking-question.dto';

export class UpdateSpeakingQuestionDto extends PartialType(CreateSpeakingQuestionDto) {}
