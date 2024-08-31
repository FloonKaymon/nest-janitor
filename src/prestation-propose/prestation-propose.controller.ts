import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrestationProposeService } from './prestation-propose.service';
import { CreatePrestationProposeDto } from './dto/create-prestation-propose.dto';
import { UpdatePrestationProposeDto } from './dto/update-prestation-propose.dto';

@Controller('prestation-propose')
export class PrestationProposeController {
  constructor(
    private readonly prestationProposeService: PrestationProposeService,
  ) {}

  @Post()
  create(@Body() createPrestationProposeDto: CreatePrestationProposeDto) {
    return this.prestationProposeService.create(createPrestationProposeDto);
  }

  @Get()
  findAll() {
    return this.prestationProposeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestationProposeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrestationProposeDto: UpdatePrestationProposeDto,
  ) {
    return this.prestationProposeService.update(
      +id,
      updatePrestationProposeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestationProposeService.remove(+id);
  }
}
