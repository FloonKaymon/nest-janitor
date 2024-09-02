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
    return await this.prestationProposeRepository.save(
      createPrestationProposeDto,
    );
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

  async update(id: number, updatePrestationProposeDto: UpdatePrestationProposeDto) {
    
    return await this.prestationProposeRepository.update(id, updatePrestationProposeDto);
  }

  async remove(id: number) {
    return await this.prestationProposeRepository.delete(id);
  }
}
