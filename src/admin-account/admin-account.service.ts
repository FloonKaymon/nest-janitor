import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminAccountDto } from './dto/create-admin-account.dto';
import { UpdateAdminAccountDto } from './dto/update-admin-account.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AdminAccount } from './entities/admin-account.entity';

@Injectable()
export class AdminAccountService {
  constructor(
    @InjectRepository(AdminAccount)
    private adminAccountRepository: Repository<AdminAccount>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, encodedPassword: string): Promise<any> {
    const adminAccount = await this.adminAccountRepository.findOne({
      where: { email: email },
    });
    if (
      adminAccount &&
      (await bcrypt.compare(encodedPassword, adminAccount.encodedPassword))
    ) {
      const { encodedPassword, ...result } = adminAccount;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const adminAccount = await this.validateUser(email, password);
    if (adminAccount == null) {
      throw new UnauthorizedException();
    }
    const payload = { adminAccountEmail: adminAccount.email, aadminAccountId: adminAccount.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async create(createAdminAccountDto: CreateAdminAccountDto) {
    const adminAccount = await this.adminAccountRepository.findOne({
      where: { email: createAdminAccountDto.email },
    });
    if (adminAccount) {
      throw new HttpException('Account already exists', HttpStatus.CONFLICT);
    }
    return this.adminAccountRepository.save(createAdminAccountDto);
  }

  async findAll(): Promise<AdminAccount[]> {
    const adminAccounts = await this.adminAccountRepository.find();
    if (!adminAccounts) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return adminAccounts;
  }

  async findOne(id: number): Promise<AdminAccount> {
    const adminAccount = await this.adminAccountRepository.findOne({ where: { id: id } });
    if (adminAccount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return adminAccount;
  }

  async update(id: number, updateAdminAccountDto: UpdateAdminAccountDto) {
    const adminAccount = await this.adminAccountRepository.findOne({ where: { id: id } });
    if (!adminAccount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.adminAccountRepository.update(id, updateAdminAccountDto);
  }

  async remove(id: number) {
    const adminAccount = await this.adminAccountRepository.findOne({ where: { id: id } });
    if (!adminAccount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.adminAccountRepository.delete(id);
  }
}
