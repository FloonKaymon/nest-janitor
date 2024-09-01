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
import { PrestationUnitaireService } from './prestation-unitaire.service';
import { CreatePrestationUnitaireDto } from './dto/create-prestation-unitaire.dto';
import { UpdatePrestationUnitaireDto } from './dto/update-prestation-unitaire.dto';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('prestation-unitaire')
export class PrestationUnitaireController {
  constructor(
    private readonly prestationUnitaireService: PrestationUnitaireService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPrestationUnitaireDto: CreatePrestationUnitaireDto) {
    return this.prestationUnitaireService.create(createPrestationUnitaireDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.prestationUnitaireService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.prestationUnitaireService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.prestationUnitaireService.remove(+id);
  }
}
