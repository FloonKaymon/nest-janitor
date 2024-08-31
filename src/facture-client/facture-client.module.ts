import { Module } from '@nestjs/common';
import { FactureClientService } from './facture-client.service';
import { FactureClientController } from './facture-client.controller';

@Module({
  controllers: [FactureClientController],
  providers: [FactureClientService],
})
export class FactureClientModule {}
