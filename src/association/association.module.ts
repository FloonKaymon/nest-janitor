import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './entities/association.entity';
import { AssociationService } from './association.service';
import { AssociationController } from './association.controller';
import { Article } from 'src/article/entities/article.entity';
import { Event } from 'src/event/entities/event.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Association, Article, Event])],
  controllers: [AssociationController],
  providers: [AssociationService],
})
export class AssociationModule {}
