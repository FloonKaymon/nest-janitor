import { Module } from '@nestjs/common';
import { PrestataireAccountService } from './prestataire-account.service';
import { PrestataireAccountController } from './prestataire-account.controller';

@Module({
  controllers: [PrestataireAccountController],
  providers: [PrestataireAccountService],
})
export class PrestataireAccountModule {}
