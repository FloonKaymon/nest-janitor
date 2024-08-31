import { Test, TestingModule } from '@nestjs/testing';
import { PrestationUnitaireController } from './prestation-unitaire.controller';
import { PrestationUnitaireService } from './prestation-unitaire.service';

describe('PrestationUnitaireController', () => {
  let controller: PrestationUnitaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestationUnitaireController],
      providers: [PrestationUnitaireService],
    }).compile();

    controller = module.get<PrestationUnitaireController>(
      PrestationUnitaireController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
