import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { AssociationService } from './association.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/authguard';
import * as path from 'path';

@Controller('association')
export class AssociationController {
  constructor(private readonly associationService: AssociationService) {}

  @Post('uploads')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('logo', {
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
  create(
    @Body() createAssociationDto: CreateAssociationDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createAssociationDto.logo = file.filename;
    return this.associationService.create(createAssociationDto);
  }

  @Get()
  findAll() {
    return this.associationService.findAll();
  }

  @Get(':associationName')
  findOne(@Param('associationName') associationName: string) {
    return this.associationService.findOne(associationName);
  }

  @Patch(':associationName')
  update(
    @Param('associationName') associationName: string,
    @Body() updateAssociationDto: UpdateAssociationDto,
  ) {
    return this.associationService.update(
      associationName,
      updateAssociationDto,
    );
  }

  @Delete(':associationName')
  remove(@Param('associationName') associationName: string) {
    return this.associationService.remove(associationName);
  }
}
