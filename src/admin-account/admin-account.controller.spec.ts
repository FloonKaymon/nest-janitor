import { Test, TestingModule } from '@nestjs/testing';
import { AdminAccountController } from './admin-account.controller';
import { AdminAccountService } from './admin-account.service';

describe('AdminAccountController', () => {
  let controller: AdminAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminAccountController],
      providers: [AdminAccountService],
    }).compile();

    controller = module.get<AdminAccountController>(AdminAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
