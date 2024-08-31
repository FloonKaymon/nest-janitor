import { Module } from '@nestjs/common';
import { PrestationCategoryService } from './prestation-category.service';
import { PrestationCategoryController } from './prestation-category.controller';

@Module({
  controllers: [PrestationCategoryController],
  providers: [PrestationCategoryService],
})
export class PrestationCategoryModule {}
