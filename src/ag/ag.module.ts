import { Module } from '@nestjs/common';
import { AgService } from './ag.service';
import { AgController } from './ag.controller';

@Module({
  controllers: [AgController],
  providers: [AgService],
})
export class AgModule {}
