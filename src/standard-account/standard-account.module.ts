import { Module } from '@nestjs/common';
import { StandardAccountService } from './standard-account.service';
import { StandardAccountController } from './standard-account.controller';
import { JwtService } from '@nestjs/jwt';
import { StandardAccount } from './entities/standard-account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StandardAccount])],
  controllers: [StandardAccountController],
  providers: [StandardAccountService, JwtService],
})
export class StandardAccountModule {}
