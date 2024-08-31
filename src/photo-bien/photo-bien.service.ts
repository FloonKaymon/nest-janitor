import { Injectable } from '@nestjs/common';
import { CreatePhotoBienDto } from './dto/create-photo-bien.dto';
import { UpdatePhotoBienDto } from './dto/update-photo-bien.dto';

@Injectable()
export class PhotoBienService {
  create(createPhotoBienDto: CreatePhotoBienDto) {
    return 'This action adds a new photoBien';
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

  remove(id: number) {
    return `This action removes a #${id} photoBien`;
  }
}
