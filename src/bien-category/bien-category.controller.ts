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
import { BienCategoryService } from './bien-category.service';
import { CreateBienCategoryDto } from './dto/create-bien-category.dto';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('bien-category')
export class BienCategoryController {
  constructor(private readonly bienCategoryService: BienCategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBienCategoryDto: CreateBienCategoryDto) {
    return this.bienCategoryService.create(createBienCategoryDto);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  assignBienToCategory(@Body() name: string, id: number) {
    return this.bienCategoryService.addUserToGroup(name, id);
  }


  @Get()
  findAll() {
    return this.bienCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bienCategoryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bienCategoryService.remove(id);
  }
}
