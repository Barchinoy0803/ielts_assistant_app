import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationalCenterDto } from './create-educational-center.dto';

export class UpdateEducationalCenterDto extends PartialType(CreateEducationalCenterDto) {}
