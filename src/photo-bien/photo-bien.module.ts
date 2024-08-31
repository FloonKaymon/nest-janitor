import { Module } from '@nestjs/common';
import { PhotoBienService } from './photo-bien.service';
import { PhotoBienController } from './photo-bien.controller';
import { PhotoBien } from './entities/photo-bien.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoBien])],
  controllers: [PhotoBienController],
  providers: [PhotoBienService],
})
export class PhotoBienModule {}
