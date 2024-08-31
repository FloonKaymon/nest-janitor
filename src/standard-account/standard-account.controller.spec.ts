import { Test, TestingModule } from '@nestjs/testing';
import { StandardAccountController } from './standard-account.controller';
import { StandardAccountService } from './standard-account.service';

describe('StandardAccountController', () => {
  let controller: StandardAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandardAccountController],
      providers: [StandardAccountService],
    }).compile();

    controller = module.get<StandardAccountController>(
      StandardAccountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
