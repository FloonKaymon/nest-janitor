import { Injectable } from '@nestjs/common';
import { CreatePhotoBienDto } from './dto/create-photo-bien.dto';
import { UpdatePhotoBienDto } from './dto/update-photo-bien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoBien } from './entities/photo-bien.entity';

@Injectable()
export class PhotoBienService {
  constructor(
    @InjectRepository(PhotoBien)
    private photoBienRepository: Repository<PhotoBien>,
  ) {}

  async create(createPhotoBienDto: CreatePhotoBienDto) {
    const photoBien = this.photoBienRepository.create(createPhotoBienDto);
    return this.photoBienRepository.save(photoBien);
  }

  findAll() {
    return `This action returns all photoBien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photoBien`;
  }

  update(id: number, updatePhotoBienDto: UpdatePhotoBienDto) {
    return `This action updates a #${id} photoBien`;
  }

  async remove(id: number) {
    return await this.photoBienRepository.delete(id);
  }
}
