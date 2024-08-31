import { Injectable } from '@nestjs/common';
import { CreateStandardAccountDto } from './dto/create-standard-account.dto';
import { UpdateStandardAccountDto } from './dto/update-standard-account.dto';

@Injectable()
export class StandardAccountService {
  create(createStandardAccountDto: CreateStandardAccountDto) {
    return 'This action adds a new standardAccount';
  }

  findAll() {
    return `This action returns all standardAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} standardAccount`;
  }

  update(id: number, updateStandardAccountDto: UpdateStandardAccountDto) {
    return `This action updates a #${id} standardAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} standardAccount`;
  }
}
