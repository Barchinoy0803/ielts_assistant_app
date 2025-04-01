import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingPartDto } from './create-reading-part.dto';

export class UpdateReadingPartDto extends PartialType(CreateReadingPartDto) {}
