import { Injectable } from '@nestjs/common';
import { CreateAgDto } from './dto/create-ag.dto';
import { UpdateAgDto } from './dto/update-ag.dto';

@Injectable()
export class AgService {
  create(createAgDto: CreateAgDto) {
    return 'This action adds a new ag';
  }

  findAll() {
    return `This action returns all ag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ag`;
  }

  update(id: number, updateAgDto: UpdateAgDto) {
    return `This action updates a #${id} ag`;
  }

  remove(id: number) {
    return `This action removes a #${id} ag`;
  }
}
