import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgService } from './ag.service';
import { CreateAgDto } from './dto/create-ag.dto';
import { UpdateAgDto } from './dto/update-ag.dto';

@Controller('ag')
export class AgController {
  constructor(private readonly agService: AgService) {}

  @Post()
  create(@Body() createAgDto: CreateAgDto) {
    return this.agService.create(createAgDto);
  }

  @Get()
  findAll() {
    return this.agService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgDto: UpdateAgDto) {
    return this.agService.update(+id, updateAgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agService.remove(+id);
  }
}
