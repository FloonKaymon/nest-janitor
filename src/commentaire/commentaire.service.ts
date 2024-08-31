import { Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commentaire } from './entities/commentaire.entity';

@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(Commentaire)
    private commentaireRepository: Repository<Commentaire>,
  ) {}
  async create(createCommentaireDto: CreateCommentaireDto) {
    const commentaire = this.commentaireRepository.create(createCommentaireDto);
    return await this.commentaireRepository.save(commentaire);
  }

  async findAll() {
    return await this.commentaireRepository.find(
      {
        relations: {
          bien: true,
          standardAccount: true,
        }
      }
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} commentaire`;
  }

  update(id: number, updateCommentaireDto: UpdateCommentaireDto) {
    return `This action updates a #${id} commentaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentaire`;
  }
}
