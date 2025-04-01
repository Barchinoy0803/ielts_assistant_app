import { Module } from '@nestjs/common';
import { WritingVariantService } from './writing-variant.service';
import { WritingVariantController } from './writing-variant.controller';

@Module({
  controllers: [WritingVariantController],
  providers: [WritingVariantService],
})
export class WritingVariantModule {}
