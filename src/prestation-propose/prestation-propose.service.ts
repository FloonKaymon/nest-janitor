import { Injectable } from '@nestjs/common';
import { CreatePrestationProposeDto } from './dto/create-prestation-propose.dto';
import { UpdatePrestationProposeDto } from './dto/update-prestation-propose.dto';

@Injectable()
export class PrestationProposeService {
  create(createPrestationProposeDto: CreatePrestationProposeDto) {
    return 'This action adds a new prestationPropose';
  }

  findAll() {
    return `This action returns all prestationPropose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestationPropose`;
  }

  update(id: number, updatePrestationProposeDto: UpdatePrestationProposeDto) {
    return `This action updates a #${id} prestationPropose`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestationPropose`;
  }
}
