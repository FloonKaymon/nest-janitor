import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BienService } from './bien.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';

@Controller('bien')
export class BienController {
  constructor(private readonly bienService: BienService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateBienDto: UpdateBienDto) {
    return this.bienService.update(+id, updateBienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bienService.remove(+id);
  }
}
