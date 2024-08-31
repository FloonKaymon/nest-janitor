import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BienCategoryService } from './bien-category.service';
import { CreateBienCategoryDto } from './dto/create-bien-category.dto';
import { UpdateBienCategoryDto } from './dto/update-bien-category.dto';

@Controller('bien-category')
export class BienCategoryController {
  constructor(private readonly bienCategoryService: BienCategoryService) {}

  @Post()
  create(@Body() createBienCategoryDto: CreateBienCategoryDto) {
    return this.bienCategoryService.create(createBienCategoryDto);
  }

  @Get()
  findAll() {
    return this.bienCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bienCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBienCategoryDto: UpdateBienCategoryDto,
  ) {
    return this.bienCategoryService.update(+id, updateBienCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bienCategoryService.remove(+id);
  }
}
