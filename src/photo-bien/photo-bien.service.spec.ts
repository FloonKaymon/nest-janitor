import { Test, TestingModule } from '@nestjs/testing';
import { PhotoBienService } from './photo-bien.service';

describe('PhotoBienService', () => {
  let service: PhotoBienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoBienService],
    }).compile();

    service = module.get<PhotoBienService>(PhotoBienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
