import { Injectable } from '@nestjs/common';
import { CreatePrestationUnitaireDto } from './dto/create-prestation-unitaire.dto';
import { UpdatePrestationUnitaireDto } from './dto/update-prestation-unitaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrestationUnitaire } from './entities/prestation-unitaire.entity';
import { PrestationCategory } from 'src/prestation-category/entities/prestation-category.entity';

@Injectable()
export class PrestationUnitaireService {
  constructor(
    @InjectRepository(PrestationUnitaire)
    private prestationUnitaireRepository: Repository<PrestationUnitaire>,

  ) {}
  
  async create(createPrestationUnitaireDto: CreatePrestationUnitaireDto) {
    return await this.prestationUnitaireRepository.save(createPrestationUnitaireDto);
  }

  async findAll() {
    return await this.prestationUnitaireRepository.find();
  }

  async findOne(id: number) {
    return await this.prestationUnitaireRepository.findOne({where: {id : id}});
  }

  async update(id: number, updatePrestationUnitaireDto: UpdatePrestationUnitaireDto) {
    return await this.prestationUnitaireRepository.update(id, updatePrestationUnitaireDto);
  }

  async remove(id: number) {
    return await this.prestationUnitaireRepository.delete(id);
  }
}
