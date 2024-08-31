import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FactureClientService } from './facture-client.service';
import { CreateFactureClientDto } from './dto/create-facture-client.dto';
import { UpdateFactureClientDto } from './dto/update-facture-client.dto';

@Controller('facture-client')
export class FactureClientController {
  constructor(private readonly factureClientService: FactureClientService) {}

  @Post()
  create(@Body() createFactureClientDto: CreateFactureClientDto) {
    return this.factureClientService.create(createFactureClientDto);
  }

  @Get()
  findAll() {
    return this.factureClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureClientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFactureClientDto: UpdateFactureClientDto,
  ) {
    return this.factureClientService.update(+id, updateFactureClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureClientService.remove(+id);
  }
}
