import { Injectable } from '@nestjs/common';
import { CreatePrestationProposeDto } from './dto/create-prestation-propose.dto';
import { UpdatePrestationProposeDto } from './dto/update-prestation-propose.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrestationPropose } from './entities/prestation-propose.entity';

@Injectable()
export class PrestationProposeService {
  constructor(
    @InjectRepository(PrestationPropose)
    private prestationProposeRepository: Repository<PrestationPropose>,
  ) {}

  async create(createPrestationProposeDto: CreatePrestationProposeDto) {
    return await this.prestationProposeRepository.save(createPrestationProposeDto);
  }

  async findAll() {
    return await this.prestationProposeRepository.find({
      relations: {
        standardAccount: true,
        prestationCategory: true,
        prestationUnitaires: true,
      },
    });
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
