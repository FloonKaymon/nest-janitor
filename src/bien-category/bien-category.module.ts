import { Module } from '@nestjs/common';
import { BienCategoryService } from './bien-category.service';
import { BienCategoryController } from './bien-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienCategory } from './entities/bien-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BienCategory])],
  controllers: [BienCategoryController],
  providers: [BienCategoryService],
})
export class BienCategoryModule {}
