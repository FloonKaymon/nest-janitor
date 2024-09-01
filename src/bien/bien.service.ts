import { Injectable } from '@nestjs/common';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bien } from './entities/bien.entity';

@Injectable()
export class BienService {
  constructor(
    @InjectRepository(Bien)
    private bienRepository: Repository<Bien>,
  ) {}
  async create(createBienDto: CreateBienDto) {
    const bien = this.bienRepository.create(createBienDto);
    return await this.bienRepository.save(bien);
  }

  async findAll() {
    return await this.bienRepository.find({
      relations: {
        photoBiens: true,
        reservations: true,
        commentaires: true,
        bienCategories: true,
      }
    });
  }

  async findOne(id: number) {
    return await this.bienRepository.findOne({
      where: {id: id},
      relations: {
        photoBiens: true,
        reservations: true,
        commentaires: true,
        bienCategories: true,
      }
    });
  }

  async update(id: number, updateBienDto: UpdateBienDto) {
    return await this.bienRepository.update(id, updateBienDto);
  }

  async remove(id: number) {
    return await this.bienRepository.delete(id);
  }
}
