import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PrestationCategoryService } from './prestation-category.service';
import { CreatePrestationCategoryDto } from './dto/create-prestation-category.dto';
import { UpdatePrestationCategoryDto } from './dto/update-prestation-category.dto';
import { JwtAuthGuard } from 'src/auth/authguard';
import { parse } from 'path';

@Controller('prestation-category')
export class PrestationCategoryController {
  constructor(
    private readonly prestationCategoryService: PrestationCategoryService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPrestationCategoryDto: CreatePrestationCategoryDto) {
    return this.prestationCategoryService.create(createPrestationCategoryDto);
  }

  @Get()
  findAll() {
    return this.prestationCategoryService.findAll();
  }



  @Post('available')
  findAvailable(
    @Body() body,
  ) {
    console.log('prestationCategoryId', body.prestationCategoryId);
    console.log('date', body.date);
    const parsedDate = new Date(body.date);
    console.log('parsedDate', parsedDate);
    return this.prestationCategoryService.findAvailablePrestationPropose(
      body.prestationCategoryId,
      parsedDate,
    );
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.prestationCategoryService.remove(+id);
  }
}
