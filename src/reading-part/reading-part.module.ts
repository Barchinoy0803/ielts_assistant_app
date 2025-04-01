import { Module } from '@nestjs/common';
import { ReadingPartService } from './reading-part.service';
import { ReadingPartController } from './reading-part.controller';

@Module({
  controllers: [ReadingPartController],
  providers: [ReadingPartService],
})
export class ReadingPartModule {}
