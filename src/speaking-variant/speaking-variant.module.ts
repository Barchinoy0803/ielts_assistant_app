import { Module } from '@nestjs/common';
import { SpeakingVariantService } from './speaking-variant.service';
import { SpeakingVariantController } from './speaking-variant.controller';

@Module({
  controllers: [SpeakingVariantController],
  providers: [SpeakingVariantService],
})
export class SpeakingVariantModule {}
