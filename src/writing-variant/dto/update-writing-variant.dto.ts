import { PartialType } from '@nestjs/mapped-types';
import { CreateWritingVariantDto } from './create-writing-variant.dto';

export class UpdateWritingVariantDto extends PartialType(CreateWritingVariantDto) {}
