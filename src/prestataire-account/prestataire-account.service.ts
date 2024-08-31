import { Injectable } from '@nestjs/common';
import { CreatePrestataireAccountDto } from './dto/create-prestataire-account.dto';
import { UpdatePrestataireAccountDto } from './dto/update-prestataire-account.dto';

@Injectable()
export class PrestataireAccountService {
  create(createPrestataireAccountDto: CreatePrestataireAccountDto) {
    return 'This action adds a new prestataireAccount';
  }

  findAll() {
    return `This action returns all prestataireAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestataireAccount`;
  }

  update(id: number, updatePrestataireAccountDto: UpdatePrestataireAccountDto) {
    return `This action updates a #${id} prestataireAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestataireAccount`;
  }
}
