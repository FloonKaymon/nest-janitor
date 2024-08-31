import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrestataireAccountService } from './prestataire-account.service';
import { CreatePrestataireAccountDto } from './dto/create-prestataire-account.dto';
import { UpdatePrestataireAccountDto } from './dto/update-prestataire-account.dto';

@Controller('prestataire-account')
export class PrestataireAccountController {
  constructor(
    private readonly prestataireAccountService: PrestataireAccountService,
  ) {}

  @Post()
  create(@Body() createPrestataireAccountDto: CreatePrestataireAccountDto) {
    return this.prestataireAccountService.create(createPrestataireAccountDto);
  }

  @Get()
  findAll() {
    return this.prestataireAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestataireAccountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrestataireAccountDto: UpdatePrestataireAccountDto,
  ) {
    return this.prestataireAccountService.update(
      +id,
      updatePrestataireAccountDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestataireAccountService.remove(+id);
  }
}
