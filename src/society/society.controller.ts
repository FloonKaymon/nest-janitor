import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SocietyService } from './society.service';
import { CreateSocietyDto } from './dto/create-society.dto';
import { UpdateSocietyDto } from './dto/update-society.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('society')
export class SocietyController {
  constructor(private readonly societyService: SocietyService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('logoUrl', {
      storage: diskStorage({
        destination: 'uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  create(@Body() createSocietyDto: CreateSocietyDto, @UploadedFile() file: Express.Multer.File) {
    createSocietyDto.logoUrl = file.filename;
    return this.societyService.create(createSocietyDto);
  }

  @Get()
  findAll() {
    return this.societyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.societyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocietyDto: UpdateSocietyDto) {
    return this.societyService.update(+id, updateSocietyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.societyService.remove(+id);
  }
}

