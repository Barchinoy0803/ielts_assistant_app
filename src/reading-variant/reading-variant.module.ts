import { Module } from '@nestjs/common';
import { ReadingVariantService } from './reading-variant.service';
import { ReadingVariantController } from './reading-variant.controller';

@Module({
  controllers: [ReadingVariantController],
  providers: [ReadingVariantService],
})
export class ReadingVariantModule {}
