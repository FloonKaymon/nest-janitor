import { Test, TestingModule } from '@nestjs/testing';
import { StandardAccountService } from './standard-account.service';

describe('StandardAccountService', () => {
  let service: StandardAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandardAccountService],
    }).compile();

    service = module.get<StandardAccountService>(StandardAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
