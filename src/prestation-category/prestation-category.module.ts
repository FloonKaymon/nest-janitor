import { Module } from '@nestjs/common';
import { PrestationCategoryService } from './prestation-category.service';
import { PrestationCategoryController } from './prestation-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestationCategory } from './entities/prestation-category.entity';
import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestationCategory, PrestationPropose])],	
  controllers: [PrestationCategoryController],
  providers: [PrestationCategoryService],
})
export class PrestationCategoryModule {}
