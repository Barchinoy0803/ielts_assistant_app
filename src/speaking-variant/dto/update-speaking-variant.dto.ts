import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingVariantDto } from './create-speaking-variant.dto';

export class UpdateSpeakingVariantDto extends PartialType(CreateSpeakingVariantDto) {}
