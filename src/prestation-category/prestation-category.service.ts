import { Injectable } from '@nestjs/common';
import { CreatePrestationCategoryDto } from './dto/create-prestation-category.dto';
import { UpdatePrestationCategoryDto } from './dto/update-prestation-category.dto';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestationCategory } from './entities/prestation-category.entity';

@Injectable()
export class PrestationCategoryService {
  constructor(
    @InjectRepository(PrestationCategory)
    private prestationCategoryRepository: Repository<PrestationCategory>,
  ) {}
  async create(createPrestationCategoryDto: CreatePrestationCategoryDto) {
    return await this.prestationCategoryRepository.save(
      createPrestationCategoryDto,
    );
  }

  async findAll() {
    return await this.prestationCategoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} prestationCategory`;
  }

  update(id: number, updatePrestationCategoryDto: UpdatePrestationCategoryDto) {
    return `This action updates a #${id} prestationCategory`;
  }

  async remove(id: number) {
    return await this.prestationCategoryRepository.delete(id);
  }
}
