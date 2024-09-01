import { Module } from '@nestjs/common';
import { BienCategoryService } from './bien-category.service';
import { BienCategoryController } from './bien-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienCategory } from './entities/bien-category.entity';
import { Bien } from 'src/bien/entities/bien.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BienCategory, Bien])],
  controllers: [BienCategoryController],
  providers: [BienCategoryService],
})
export class BienCategoryModule {}
