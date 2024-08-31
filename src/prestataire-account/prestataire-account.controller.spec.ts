import { Test, TestingModule } from '@nestjs/testing';
import { PrestataireAccountController } from './prestataire-account.controller';
import { PrestataireAccountService } from './prestataire-account.service';

describe('PrestataireAccountController', () => {
  let controller: PrestataireAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestataireAccountController],
      providers: [PrestataireAccountService],
    }).compile();

    controller = module.get<PrestataireAccountController>(
      PrestataireAccountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
