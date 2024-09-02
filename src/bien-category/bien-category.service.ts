import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBienCategoryDto } from './dto/create-bien-category.dto';
import { OneToMany, Repository } from 'typeorm';
import { BienCategory } from './entities/bien-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from 'src/bien/entities/bien.entity';
@Injectable()
export class BienCategoryService {
  constructor(
    @InjectRepository(BienCategory)
    private bienCategoryRepository: Repository<BienCategory>,
    @InjectRepository(Bien)
    private bienRepository: Repository<Bien>,
  ) {}

  async create(createBienCategoryDto: CreateBienCategoryDto) {
    const bienCategory = await this.bienCategoryRepository.findOne({
      where: { name: createBienCategoryDto.name },
    });
    if (bienCategory) {
      throw new HttpException(
        'BienCategory already exists',
        HttpStatus.CONFLICT,
      );
    }
    return this.bienCategoryRepository.save(createBienCategoryDto);
  }

  async findAll(): Promise<BienCategory[]> {
    const bienCategories = await this.bienCategoryRepository.find({relations: ['biens']});
    if (!bienCategories) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bienCategories;
  }

  async findOne(name: string): Promise<BienCategory> {
    const bienCategory = await this.bienCategoryRepository.findOne({
      where: { name: name }, relations: ['biens']
    });
    if (bienCategory) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bienCategory;
  }

  async remove(name: string) {
    const adminAccount = await this.bienCategoryRepository.findOne({
      where: { name: name },
    });
    if (!adminAccount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.bienCategoryRepository.delete(name);
  }

  async addUserToGroup(bienCategoryId: string, bienId: number) {
    const bienCategory = await this.bienCategoryRepository.findOne({
      where: { name: bienCategoryId },
      relations: ['biens'],
    });
    const bien = await this.bienRepository.findOne({ where: { id: bienId } });
    if (!bienCategory || !bien) {
      throw new Error('bienCategory or bien not found');
    }
    // Ajouter le groupe à l'utilisateur
    bienCategory.biens.push(bien);

    // Sauvegarder l'utilisateur avec le groupe associé
    return await this.bienRepository.save(bien);
  }
}
