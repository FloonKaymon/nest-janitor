import { Test, TestingModule } from '@nestjs/testing';
import { PrestataireAccountService } from './prestataire-account.service';

describe('PrestataireAccountService', () => {
  let service: PrestataireAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestataireAccountService],
    }).compile();

    service = module.get<PrestataireAccountService>(PrestataireAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
