import { Test, TestingModule } from '@nestjs/testing';
import { FactureClientService } from './facture-client.service';

describe('FactureClientService', () => {
  let service: FactureClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactureClientService],
    }).compile();

    service = module.get<FactureClientService>(FactureClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
