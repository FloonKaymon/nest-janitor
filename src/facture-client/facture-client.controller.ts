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
import { FactureClientService } from './facture-client.service';
import { CreateFactureClientDto } from './dto/create-facture-client.dto';
import { UpdateFactureClientDto } from './dto/update-facture-client.dto';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('facture-client')
export class FactureClientController {
  constructor(private readonly factureClientService: FactureClientService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createFactureClientDto: CreateFactureClientDto) {
    return this.factureClientService.create(createFactureClientDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.factureClientService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.factureClientService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateFactureClientDto: UpdateFactureClientDto,
  ) {
    return this.factureClientService.update(+id, updateFactureClientDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.factureClientService.remove(+id);
  }
}
