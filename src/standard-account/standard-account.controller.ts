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
} from '@nestjs/common';
import { StandardAccountService } from './standard-account.service';
import { CreateStandardAccountDto } from './dto/create-standard-account.dto';
import { UpdateStandardAccountDto } from './dto/update-standard-account.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { HashPasswordInterceptor } from 'src/interceptor/hash.password.interceptor';

@Controller('standard-account')
export class StandardAccountController {
  constructor(
    private readonly standardAccountService: StandardAccountService,
  ) {}

  @Post('login')
  login(@Body() body: { email: string; encodedPassword: string }) {
    return this.standardAccountService.login(body.email, body.encodedPassword);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('photoUrl', {
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
    HashPasswordInterceptor,
  )
  create(@Body() createStandardAccountDto: CreateStandardAccountDto, @UploadedFile() file: Express.Multer.File) {
    createStandardAccountDto.photoUrl = file.filename;
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
