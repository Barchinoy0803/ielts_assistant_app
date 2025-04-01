import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingQuestionDto } from './create-reading-question.dto';

export class UpdateReadingQuestionDto extends PartialType(CreateReadingQuestionDto) {}
