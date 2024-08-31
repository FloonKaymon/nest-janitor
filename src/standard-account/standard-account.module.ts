import { Module } from '@nestjs/common';
import { StandardAccountService } from './standard-account.service';
import { StandardAccountController } from './standard-account.controller';

@Module({
  controllers: [StandardAccountController],
  providers: [StandardAccountService],
})
export class StandardAccountModule {}
