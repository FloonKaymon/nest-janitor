import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBienCategoryDto } from './dto/create-bien-category.dto'
import { Repository } from 'typeorm';
import { BienCategory } from './entities/bien-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BienCategoryService {
  constructor(
    @InjectRepository(BienCategory)
    private bienCategoryRepository: Repository<BienCategory>,
  ) {}
  
  async create(createBienCategoryDto: CreateBienCategoryDto) {
    const bienCategory = await this.bienCategoryRepository.findOne({
      where: { name: createBienCategoryDto.name },
    });
    if (bienCategory) {
      throw new HttpException('BienCategory already exists', HttpStatus.CONFLICT);
    }
    return this.bienCategoryRepository.save(createBienCategoryDto);
  }

  async findAll(): Promise<BienCategory[]> {
    const bienCategories = await this.bienCategoryRepository.find();
    if (!bienCategories) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bienCategories;
  }

  async findOne(name: string): Promise<BienCategory> {
    const bienCategory = await this.bienCategoryRepository.findOne({ where: { name: name } });
    if (bienCategory) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bienCategory;
  }

  async remove(name: string) {
    const adminAccount = await this.bienCategoryRepository.findOne({ where: { name: name } });
    if (!adminAccount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.bienCategoryRepository.delete(name);
  }
}
