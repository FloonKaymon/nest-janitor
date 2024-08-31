import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('association/:idAssociation/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(
    @Param('idAssociation') idAssociation: string,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    createArticleDto.associationId = +idAssociation;
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Param('idAssociation') idAssociation: string) {
    return this.articleService.findAllByAssociation(+idAssociation);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Param('idAssociation') idAssociation: string,
  ) {
    return this.articleService.findOne(+id, +idAssociation);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('idAssociation') idAssociation: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Param('idAssociation') idAssociation: string,
  ) {
    return this.articleService.remove(+id, +idAssociation);
  }
}
