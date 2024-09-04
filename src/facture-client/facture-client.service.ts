import { Injectable } from '@nestjs/common';
import { CreateFactureClientDto } from './dto/create-facture-client.dto';
import { UpdateFactureClientDto } from './dto/update-facture-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactureClient } from './entities/facture-client.entity';

@Injectable()
export class FactureClientService {
  constructor(
    @InjectRepository(FactureClient)
    private factureClientRepository: Repository<FactureClient>,
  ) {}
  async create(createFactureClientDto: CreateFactureClientDto) {
    const factureClient = this.factureClientRepository.create(createFactureClientDto);
    return this.factureClientRepository.save(factureClient);
  }

  async findAll() {
    return await this.factureClientRepository.find({relations: {
      standardAccount: true,
    }});
  }

  findOne(id: number) {
    return `This action returns a #${id} factureClient`;
  }

  update(id: number, updateFactureClientDto: UpdateFactureClientDto) {
    return `This action updates a #${id} factureClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} factureClient`;
  }
}
