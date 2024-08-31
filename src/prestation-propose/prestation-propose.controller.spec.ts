import { Test, TestingModule } from '@nestjs/testing';
import { PrestationProposeController } from './prestation-propose.controller';
import { PrestationProposeService } from './prestation-propose.service';

describe('PrestationProposeController', () => {
  let controller: PrestationProposeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestationProposeController],
      providers: [PrestationProposeService],
    }).compile();

    controller = module.get<PrestationProposeController>(
      PrestationProposeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
