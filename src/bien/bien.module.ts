import { Module, Res } from '@nestjs/common';
import { BienService } from './bien.service';
import { BienController } from './bien.controller';
import { Bien } from './entities/bien.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bien])],
  controllers: [BienController],
  providers: [BienService],
})
export class BienModule {}
