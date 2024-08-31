import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PhotoBienService } from './photo-bien.service';
import { CreatePhotoBienDto } from './dto/create-photo-bien.dto';
import { UpdatePhotoBienDto } from './dto/update-photo-bien.dto';
import { JwtAuthGuard } from 'src/auth/authguard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@UseGuards(JwtAuthGuard)
@Controller('photo-bien')
export class PhotoBienController {
  constructor(private readonly photoBienService: PhotoBienService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('path', {
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
  create(@Body() createPhotoBienDto: CreatePhotoBienDto, @UploadedFile() file: Express.Multer.File) {
    createPhotoBienDto.path = file.filename;
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
