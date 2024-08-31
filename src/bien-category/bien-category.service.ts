import { Injectable } from '@nestjs/common';
import { CreateBienCategoryDto } from './dto/create-bien-category.dto';
import { UpdateBienCategoryDto } from './dto/update-bien-category.dto';

@Injectable()
export class BienCategoryService {
  create(createBienCategoryDto: CreateBienCategoryDto) {
    return 'This action adds a new bienCategory';
  }

  findAll() {
    return `This action returns all bienCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bienCategory`;
  }

  update(id: number, updateBienCategoryDto: UpdateBienCategoryDto) {
    return `This action updates a #${id} bienCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} bienCategory`;
  }
}
