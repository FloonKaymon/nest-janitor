import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotoBienService } from './photo-bien.service';
import { CreatePhotoBienDto } from './dto/create-photo-bien.dto';
import { UpdatePhotoBienDto } from './dto/update-photo-bien.dto';

@Controller('photo-bien')
export class PhotoBienController {
  constructor(private readonly photoBienService: PhotoBienService) {}

  @Post()
  create(@Body() createPhotoBienDto: CreatePhotoBienDto) {
    return this.photoBienService.create(createPhotoBienDto);
  }

  @Get()
  findAll() {
    return this.photoBienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoBienService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhotoBienDto: UpdatePhotoBienDto,
  ) {
    return this.photoBienService.update(+id, updatePhotoBienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoBienService.remove(+id);
  }
}
