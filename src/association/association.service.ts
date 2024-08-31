import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { Repository } from 'typeorm';
import { Association } from './entities/association.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/article/entities/article.entity';
import { Event } from 'src/event/entities/event.entity';

@Injectable()
export class AssociationService {
  constructor(
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createAssociationDto: CreateAssociationDto) {
    const association = await this.associationRepository.findOne({
      where: { name: createAssociationDto.name },
    });
    if (association) {
      throw new HttpException(
        'Association already exists',
        HttpStatus.CONFLICT,
      );
    }
    return this.associationRepository.save(createAssociationDto);
  }

  async findAll(): Promise<Association[]> {
    const associations = await this.associationRepository.find();
    if (!associations) {
      throw new HttpException('Associations not found', HttpStatus.NOT_FOUND);
    }
    for (const association of associations) {
      const articles = await this.articleRepository.find({
        where: { associationId: association.id },
      });
      association.articles = articles;
      const events = await this.eventRepository.find({
        where: { associationName: association.name },
      });
      association.events = events;
    }
    return associations;
  }

  async findOne(associationName: string): Promise<Association> {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const articles = await this.articleRepository.find({
      where: { associationId: association.id },
    });
    association.articles = articles;
    const events = await this.eventRepository.find({
      where: { associationName: association.name },
    });
    association.events = events;
    return association;
  }

  async update(
    associationName: string,
    updateAssociationDto: UpdateAssociationDto,
  ) {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.associationRepository.update(
      { name: associationName },
      updateAssociationDto,
    );
  }

  async remove(associationName: string) {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.associationRepository.delete({ name: associationName });
  }
}
