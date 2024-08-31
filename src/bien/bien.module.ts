import { Module } from '@nestjs/common';
import { BienService } from './bien.service';
import { BienController } from './bien.controller';

@Module({
  controllers: [BienController],
  providers: [BienService],
})
export class BienModule {}
