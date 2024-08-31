import { Injectable } from '@nestjs/common';
import { CreatePrestationUnitaireDto } from './dto/create-prestation-unitaire.dto';
import { UpdatePrestationUnitaireDto } from './dto/update-prestation-unitaire.dto';

@Injectable()
export class PrestationUnitaireService {
  create(createPrestationUnitaireDto: CreatePrestationUnitaireDto) {
    return 'This action adds a new prestationUnitaire';
  }

  findAll() {
    return `This action returns all prestationUnitaire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestationUnitaire`;
  }

  update(id: number, updatePrestationUnitaireDto: UpdatePrestationUnitaireDto) {
    return `This action updates a #${id} prestationUnitaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestationUnitaire`;
  }
}
