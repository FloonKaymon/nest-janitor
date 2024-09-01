import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PrestationProposeService } from './prestation-propose.service';
import { CreatePrestationProposeDto } from './dto/create-prestation-propose.dto';
import { UpdatePrestationProposeDto } from './dto/update-prestation-propose.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('prestation-propose')
export class PrestationProposeController {
  constructor(
    private readonly prestationProposeService: PrestationProposeService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('justificatif', {
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
  create(@Body() createPrestationProposeDto: CreatePrestationProposeDto,@UploadedFile() file: Express.Multer.File,) {
    createPrestationProposeDto.justificatif = file.filename
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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.prestationProposeService.remove(+id);
  }
}
