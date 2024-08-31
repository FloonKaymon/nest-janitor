import { Injectable } from '@nestjs/common';
import { CreatePhotoBienDto } from './dto/create-photo-bien.dto';
import { UpdatePhotoBienDto } from './dto/update-photo-bien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoBien } from './entities/photo-bien.entity';
import { Bien } from 'src/bien/entities/bien.entity';

@Injectable()
export class PhotoBienService {
  constructor(
    @InjectRepository(PhotoBien)
    private photoBienRepository: Repository<PhotoBien>,
    @InjectRepository(Bien)
    private photoBien: Repository<Bien>,
  ) {}

  async create(createPhotoBienDto: CreatePhotoBienDto) {
    return this.photoBienRepository.save(createPhotoBienDto);
  }

  findAll() {
    const photoBiens = await this.associationRepository.find();
    if (!photoBiens) {
      throw new HttpException('Associations not found', HttpStatus.NOT_FOUND);
    }
    for (const photoBien of associations) {
      const articles = await this.articleRepository.find({
        where: { associationId: association.id },
      });
      association.articles = articles;
      const events = await this.eventRepository.find({
        where: { associationName: association.name },
      });
      association.events = events;
    }
    return photoBiens;
  }

  async findAllbyBienId( bienId : number) {
    const photoBiens = await this.associationRepository.find();
    if (!photoBiens) {
      throw new HttpException('Associations not found', HttpStatus.NOT_FOUND);
    }
    for (const photoBien of associations) {
      const articles = await this.articleRepository.find({
        where: { associationId: association.id },
      });
      association.articles = articles;
      const events = await this.eventRepository.find({
        where: { associationName: association.name },
      });
      association.events = events;
    }
    return photoBiens;
  }

  findOne(id: number) {
    return `This action returns a #${id} photoBien`;
  }

  update(id: number, updatePhotoBienDto: UpdatePhotoBienDto) {
    return `This action updates a #${id} photoBien`;
  }

  remove(id: number) {
    return `This action removes a #${id} photoBien`;
  }
}
