import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingPartDto } from './create-speaking-part.dto';

export class UpdateSpeakingPartDto extends PartialType(CreateSpeakingPartDto) {}
