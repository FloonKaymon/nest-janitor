import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Association } from 'src/association/entities/association.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Association])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
