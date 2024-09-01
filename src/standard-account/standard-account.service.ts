import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateStandardAccountDto } from './dto/create-standard-account.dto';
import { UpdateStandardAccountDto } from './dto/update-standard-account.dto';
import { Repository } from 'typeorm';
import { StandardAccount } from './entities/standard-account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StandardAccountService {
  constructor(
    @InjectRepository(StandardAccount)
    private standardAccountRepository: Repository<StandardAccount>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, encodedPassword: string): Promise<any> {
    const standardAccount = await this.standardAccountRepository.findOne({
      where: { email: email },
    });
    if (
      standardAccount &&
      (await bcrypt.compare(encodedPassword, standardAccount.encodedPassword))
    ) {
      const { encodedPassword, ...result } = standardAccount;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const standardAccount = await this.validateUser(email, password);
    if (standardAccount == null) {
      throw new UnauthorizedException();
    }
    const payload = { standardAccountEmail: standardAccount.email, standardAccountId: standardAccount.id };
    return await {
      access_token: this.jwtService.sign(payload),
    };
  }


  async create(createStandardAccountDto: CreateStandardAccountDto) {
    const standardAccount = await this.standardAccountRepository.findOne({
      where: { email: createStandardAccountDto.email },
    });
    if (standardAccount) {
      throw new UnauthorizedException();
    }
    return await this.standardAccountRepository.save(createStandardAccountDto);
  }

  async findAll() {
    return await this.standardAccountRepository.find({
      relations: {
        reservations: true,
        commentaires: true,
        biens: true,
        prestationProposes: true,
      }
    });
  }

  async findOne(bearer: string) {
    const token = bearer.substring(7);
    const decoded = this.jwtService.decode(token);
    console.log(decoded);
    return await this.standardAccountRepository.findOne({
      where: {id : decoded.standardAccountId},
      relations: {
        reservations: true,
        commentaires: true,
        biens: true,
        prestationProposes: true,
      }
    });
  }

  async update(id: number, updateStandardAccountDto: UpdateStandardAccountDto) {
    return await this.standardAccountRepository.update(id, updateStandardAccountDto);
  }

  remove(id: number) {
    return `This action removes a #${id} standardAccount`;
  }
}
