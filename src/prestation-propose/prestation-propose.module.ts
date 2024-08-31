import { Module } from '@nestjs/common';
import { PrestationProposeService } from './prestation-propose.service';
import { PrestationProposeController } from './prestation-propose.controller';
import { PrestationPropose } from './entities/prestation-propose.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PrestationPropose])],
  controllers: [PrestationProposeController],
  providers: [PrestationProposeService],
})
export class PrestationProposeModule {}
