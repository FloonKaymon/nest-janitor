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
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { JwtAuthGuard } from 'src/auth/authguard';

@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCommentaireDto: CreateCommentaireDto) {
    return this.commentaireService.create(createCommentaireDto);
  }

  @Get()
  findAll() {
    return this.commentaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentaireService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCommentaireDto: UpdateCommentaireDto,
  ) {
    return this.commentaireService.update(+id, updateCommentaireDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.commentaireService.remove(+id);
  }
}
