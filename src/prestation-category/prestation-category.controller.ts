import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrestationCategoryService } from './prestation-category.service';
import { CreatePrestationCategoryDto } from './dto/create-prestation-category.dto';
import { UpdatePrestationCategoryDto } from './dto/update-prestation-category.dto';

@Controller('prestation-category')
export class PrestationCategoryController {
  constructor(
    private readonly prestationCategoryService: PrestationCategoryService,
  ) {}

  @Post()
  create(@Body() createPrestationCategoryDto: CreatePrestationCategoryDto) {
    return this.prestationCategoryService.create(createPrestationCategoryDto);
  }

  @Get()
  findAll() {
    return this.prestationCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestationCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrestationCategoryDto: UpdatePrestationCategoryDto,
  ) {
    return this.prestationCategoryService.update(
      +id,
      updatePrestationCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestationCategoryService.remove(+id);
  }
}
