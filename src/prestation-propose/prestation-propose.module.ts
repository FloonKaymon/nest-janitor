import { Module } from '@nestjs/common';
import { PrestationProposeService } from './prestation-propose.service';
import { PrestationProposeController } from './prestation-propose.controller';

@Module({
  controllers: [PrestationProposeController],
  providers: [PrestationProposeService],
})
export class PrestationProposeModule {}
