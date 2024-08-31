import { Module } from '@nestjs/common';
import { BienCategoryService } from './bien-category.service';
import { BienCategoryController } from './bien-category.controller';

@Module({
  controllers: [BienCategoryController],
  providers: [BienCategoryService],
})
export class BienCategoryModule {}
