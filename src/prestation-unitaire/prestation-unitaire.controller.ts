import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrestationUnitaireService } from './prestation-unitaire.service';
import { CreatePrestationUnitaireDto } from './dto/create-prestation-unitaire.dto';
import { UpdatePrestationUnitaireDto } from './dto/update-prestation-unitaire.dto';

@Controller('prestation-unitaire')
export class PrestationUnitaireController {
  constructor(
    private readonly prestationUnitaireService: PrestationUnitaireService,
  ) {}

  @Post()
  create(@Body() createPrestationUnitaireDto: CreatePrestationUnitaireDto) {
    return this.prestationUnitaireService.create(createPrestationUnitaireDto);
  }

  @Get()
  findAll() {
    return this.prestationUnitaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestationUnitaireService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrestationUnitaireDto: UpdatePrestationUnitaireDto,
  ) {
    return this.prestationUnitaireService.update(
      +id,
      updatePrestationUnitaireDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestationUnitaireService.remove(+id);
  }
}
