import { Test, TestingModule } from '@nestjs/testing';
import { PhotoBienController } from './photo-bien.controller';
import { PhotoBienService } from './photo-bien.service';

describe('PhotoBienController', () => {
  let controller: PhotoBienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoBienController],
      providers: [PhotoBienService],
    }).compile();

    controller = module.get<PhotoBienController>(PhotoBienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
