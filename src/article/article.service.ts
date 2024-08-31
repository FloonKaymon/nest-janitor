import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { User } from 'src/user/entities/user.entity';
import { Association } from 'src/association/entities/association.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const association = await this.associationRepository.findOne({
      where: { id: createArticleDto.associationId },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne({
      where: {
        id: createArticleDto.createdBy,
        associationName: association.name,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.articleRepository.save(createArticleDto);
  }

  async findAllByAssociation(idAssociation: number): Promise<Article[]> {
    const association = await this.associationRepository.findOne({
      where: { id: idAssociation },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const articles = await this.articleRepository.find({
      where: { associationId: idAssociation },
    });
    if (!articles) {
      throw new HttpException('Articles not found', HttpStatus.NOT_FOUND);
    }
    return articles;
  }

  async findOne(id: number, idAssociation: number): Promise<Article> {
    const association = await this.associationRepository.findOne({
      where: { id: idAssociation },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const article = await this.articleRepository.findOne({ where: { id: id } });
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return article;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const association = await this.associationRepository.findOne({
      where: { id: updateArticleDto.associationId },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const article = await this.articleRepository.findOne({
      where: { associationId: updateArticleDto.associationId },
    });
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return this.articleRepository.update(id, updateArticleDto);
  }

  async remove(id: number, idAssociation: number) {
    const association = await this.associationRepository.findOne({
      where: { id: idAssociation },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const article = await this.articleRepository.findOne({
      where: { associationId: idAssociation },
    });
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return this.articleRepository.delete(id);
  }
}
