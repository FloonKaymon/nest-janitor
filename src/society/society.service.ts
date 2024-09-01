import { Injectable } from '@nestjs/common';
import { CreateSocietyDto } from './dto/create-society.dto';
import { UpdateSocietyDto } from './dto/update-society.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Society } from './entities/society.entity';

@Injectable()
export class SocietyService {
  constructor(
    @InjectRepository(Society)
    private societyRepository: Repository<Society>,
  ) {}

  async create(createSocietyDto: CreateSocietyDto) {
    return await this.societyRepository.save(createSocietyDto);
  }

  findAll() {
    return `This action returns all society`;
  }

  findOne(id: number) {
    return `This action returns a #${id} society`;
  }

  async update(id: number, updateSocietyDto: UpdateSocietyDto) {
    return await this.societyRepository.update(id, updateSocietyDto);
    
  }

  async remove(id: number) {
    return await this.societyRepository.delete(id);
  }
}
