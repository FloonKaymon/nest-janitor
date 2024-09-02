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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestationCategoryService.findOne(+id);
  }

  @Get('available')
  findAvailablePrestationPropose(
    @Body() prestationCategoryId: string,
    @Body() date: Date,
  ) {
    return this.prestationCategoryService.findAvailablePrestationPropose(
      prestationCategoryId,
      date
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
