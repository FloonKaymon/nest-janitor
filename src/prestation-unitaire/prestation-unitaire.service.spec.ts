import { Test, TestingModule } from '@nestjs/testing';
import { PrestationUnitaireService } from './prestation-unitaire.service';

describe('PrestationUnitaireService', () => {
  let service: PrestationUnitaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestationUnitaireService],
    }).compile();

    service = module.get<PrestationUnitaireService>(PrestationUnitaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
