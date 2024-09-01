import { Module } from '@nestjs/common';
import { PrestationCategoryService } from './prestation-category.service';
import { PrestationCategoryController } from './prestation-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestationCategory } from './entities/prestation-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestationCategory])],
  controllers: [PrestationCategoryController],
  providers: [PrestationCategoryService],
})
export class PrestationCategoryModule {}
