import { Module } from '@nestjs/common';
import { FactureClientService } from './facture-client.service';
import { FactureClientController } from './facture-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactureClient } from './entities/facture-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactureClient])],
  controllers: [FactureClientController],
  providers: [FactureClientService],
})
export class FactureClientModule {}
