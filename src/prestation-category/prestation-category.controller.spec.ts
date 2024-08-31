import { Test, TestingModule } from '@nestjs/testing';
import { PrestationCategoryController } from './prestation-category.controller';
import { PrestationCategoryService } from './prestation-category.service';

describe('PrestationCategoryController', () => {
  let controller: PrestationCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestationCategoryController],
      providers: [PrestationCategoryService],
    }).compile();

    controller = module.get<PrestationCategoryController>(
      PrestationCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
