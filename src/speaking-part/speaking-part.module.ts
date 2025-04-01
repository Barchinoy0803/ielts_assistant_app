import { Module } from '@nestjs/common';
import { SpeakingPartService } from './speaking-part.service';
import { SpeakingPartController } from './speaking-part.controller';

@Module({
  controllers: [SpeakingPartController],
  providers: [SpeakingPartService],
})
export class SpeakingPartModule {}
