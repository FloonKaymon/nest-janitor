import { Test, TestingModule } from '@nestjs/testing';
import { BienCategoryService } from './bien-category.service';

describe('BienCategoryService', () => {
  let service: BienCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BienCategoryService],
    }).compile();

    service = module.get<BienCategoryService>(BienCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
