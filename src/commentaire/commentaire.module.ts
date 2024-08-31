import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { Commentaire } from './entities/commentaire.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Commentaire])],
  controllers: [CommentaireController],
  providers: [CommentaireService],
})
export class CommentaireModule {}
