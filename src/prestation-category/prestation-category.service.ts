import { Injectable } from '@nestjs/common';
import { CreatePrestationCategoryDto } from './dto/create-prestation-category.dto';
import { UpdatePrestationCategoryDto } from './dto/update-prestation-category.dto';

@Injectable()
export class PrestationCategoryService {
  create(createPrestationCategoryDto: CreatePrestationCategoryDto) {
    return 'This action adds a new prestationCategory';
  }

  findAll() {
    return `This action returns all prestationCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestationCategory`;
  }

  update(id: number, updatePrestationCategoryDto: UpdatePrestationCategoryDto) {
    return `This action updates a #${id} prestationCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestationCategory`;
  }
}
