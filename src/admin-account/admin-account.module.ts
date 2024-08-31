import { Module } from '@nestjs/common';
import { AdminAccountService } from './admin-account.service';
import { AdminAccountController } from './admin-account.controller';
import { AdminAccount } from './entities/admin-account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([AdminAccount])],
  controllers: [AdminAccountController],
  providers: [AdminAccountService, JwtService],
})
export class AdminAccountModule {}
