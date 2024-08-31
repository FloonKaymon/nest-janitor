import { Test, TestingModule } from '@nestjs/testing';
import { BienCategoryController } from './bien-category.controller';
import { BienCategoryService } from './bien-category.service';

describe('BienCategoryController', () => {
  let controller: BienCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BienCategoryController],
      providers: [BienCategoryService],
    }).compile();

    controller = module.get<BienCategoryController>(BienCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
