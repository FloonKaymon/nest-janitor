import { Module } from '@nestjs/common';
import { PrestationUnitaireService } from './prestation-unitaire.service';
import { PrestationUnitaireController } from './prestation-unitaire.controller';

@Module({
  controllers: [PrestationUnitaireController],
  providers: [PrestationUnitaireService],
})
export class PrestationUnitaireModule {}
