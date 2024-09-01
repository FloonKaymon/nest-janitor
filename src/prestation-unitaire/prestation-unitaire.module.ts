import { Module } from '@nestjs/common';
import { PrestationUnitaireService } from './prestation-unitaire.service';
import { PrestationUnitaireController } from './prestation-unitaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestationUnitaire } from './entities/prestation-unitaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestationUnitaire])],
  controllers: [PrestationUnitaireController],
  providers: [PrestationUnitaireService],
})
export class PrestationUnitaireModule {}
