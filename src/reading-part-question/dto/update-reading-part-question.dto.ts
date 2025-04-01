import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingPartQuestionDto } from './create-reading-part-question.dto';

export class UpdateReadingPartQuestionDto extends PartialType(CreateReadingPartQuestionDto) {}
