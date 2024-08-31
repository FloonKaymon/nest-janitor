import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StandardAccountService } from './standard-account.service';
import { CreateStandardAccountDto } from './dto/create-standard-account.dto';
import { UpdateStandardAccountDto } from './dto/update-standard-account.dto';

@Controller('standard-account')
export class StandardAccountController {
  constructor(
    private readonly standardAccountService: StandardAccountService,
  ) {}

  @Post()
  create(@Body() createStandardAccountDto: CreateStandardAccountDto) {
    return this.standardAccountService.create(createStandardAccountDto);
  }

  @Get()
  findAll() {
    return this.standardAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.standardAccountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStandardAccountDto: UpdateStandardAccountDto,
  ) {
    return this.standardAccountService.update(+id, updateStandardAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.standardAccountService.remove(+id);
  }
}
