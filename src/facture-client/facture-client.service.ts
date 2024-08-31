import { Injectable } from '@nestjs/common';
import { CreateFactureClientDto } from './dto/create-facture-client.dto';
import { UpdateFactureClientDto } from './dto/update-facture-client.dto';

@Injectable()
export class FactureClientService {
  create(createFactureClientDto: CreateFactureClientDto) {
    return 'This action adds a new factureClient';
  }

  findAll() {
    return `This action returns all factureClient`;
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
