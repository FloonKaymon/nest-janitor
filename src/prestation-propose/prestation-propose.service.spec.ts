import { Test, TestingModule } from '@nestjs/testing';
import { PrestationProposeService } from './prestation-propose.service';

describe('PrestationProposeService', () => {
  let service: PrestationProposeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestationProposeService],
    }).compile();

    service = module.get<PrestationProposeService>(PrestationProposeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
