import { Test, TestingModule } from '@nestjs/testing';
import { PrestationCategoryService } from './prestation-category.service';

describe('PrestationCategoryService', () => {
  let service: PrestationCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestationCategoryService],
    }).compile();

    service = module.get<PrestationCategoryService>(PrestationCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
