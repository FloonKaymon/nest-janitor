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
import { BienService } from './bien.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('bien')
export class BienController {
  constructor(private readonly bienService: BienService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBienDto: CreateBienDto) {
    return this.bienService.create(createBienDto);
  }

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bienService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateBienDto: UpdateBienDto) {
    return this.bienService.update(+id, updateBienDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.bienService.remove(+id);
  }
}
