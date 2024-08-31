import { Module } from '@nestjs/common';
import { PhotoBienService } from './photo-bien.service';
import { PhotoBienController } from './photo-bien.controller';

@Module({
  controllers: [PhotoBienController],
  providers: [PhotoBienService],
})
export class PhotoBienModule {}
