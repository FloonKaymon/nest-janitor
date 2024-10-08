import { Injectable } from '@nestjs/common';
import { CreatePrestationCategoryDto } from './dto/create-prestation-category.dto';
import { UpdatePrestationCategoryDto } from './dto/update-prestation-category.dto';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestationCategory } from './entities/prestation-category.entity';
import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';

@Injectable()
export class PrestationCategoryService {
  constructor(
    @InjectRepository(PrestationCategory)
    private prestationCategoryRepository: Repository<PrestationCategory>,
    @InjectRepository(PrestationPropose)
    private prestationProposeRepository: Repository<PrestationPropose>,
  ) {}
  async create(createPrestationCategoryDto: CreatePrestationCategoryDto) {
    return await this.prestationCategoryRepository.save(
      createPrestationCategoryDto,
    );
  }

  async findAll() {
    return await this.prestationCategoryRepository.find({
      relations: {
        prestationProposes: true,
      },
    });
  }

  async findWithParameters(vip: number, voyagerPay: number) {
    if(vip === 0){
      return await this.prestationCategoryRepository.find({
        where: {
          vip,
          voyagerPay,
        },
      });
    }
    return await this.prestationCategoryRepository.find({
      where: {
        voyagerPay,
      },
    });
  }

  async findAvailablePrestationPropose(prestationCategoryId: string, date: Date) {
    console.log('prestationCategoryId', prestationCategoryId);
    console.log('date', date);
    return await this.prestationProposeRepository
    .createQueryBuilder('prestationPropose')
    .leftJoinAndSelect('prestationPropose.prestationUnitaires', 'prestationUnitaire')
    .where('prestationPropose.status = :status', { status: 1 })
    .andWhere('prestationPropose.prestationCategoryId = :prestationCategoryId', { prestationCategoryId })
    .andWhere('(prestationUnitaire.date IS NULL OR prestationUnitaire.date != :date)', { date })
    .getOne();
}



  update(name: string, updatePrestationCategoryDto: UpdatePrestationCategoryDto) {
    return `This action updates a #${name} prestationCategory`;
  }

  async remove(name: string) {
    return await this.prestationCategoryRepository.delete(name);
  }
}
