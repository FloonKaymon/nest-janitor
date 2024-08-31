import { Test, TestingModule } from '@nestjs/testing';
import { FactureClientController } from './facture-client.controller';
import { FactureClientService } from './facture-client.service';

describe('FactureClientController', () => {
  let controller: FactureClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactureClientController],
      providers: [FactureClientService],
    }).compile();

    controller = module.get<FactureClientController>(FactureClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
