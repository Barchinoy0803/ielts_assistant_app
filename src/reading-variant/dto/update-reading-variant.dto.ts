import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingVariantDto } from './create-reading-variant.dto';

export class UpdateReadingVariantDto extends PartialType(CreateReadingVariantDto) {}
