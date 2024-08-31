import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, encodedPassword: string): Promise<any> {
    const account = await this.accountRepository.findOne({
      where: { email: email },
    });
    if (
      account &&
      (await bcrypt.compare(encodedPassword, account.encodedPassword))
    ) {
      const { encodedPassword, ...result } = account;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const account = await this.validateUser(email, password);
    if (account == null) {
      throw new UnauthorizedException();
    }
    const payload = { accountEmail: account.email, accountId: account.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountRepository.findOne({
      where: { email: createAccountDto.email },
    });
    if (account) {
      throw new HttpException('Account already exists', HttpStatus.CONFLICT);
    }
    return this.accountRepository.save(createAccountDto);
  }

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountRepository.find();
    if (!accounts) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return accounts;
  }

  async findOne(id: number): Promise<Account> {
    const account = await this.accountRepository.findOne({ where: { id: id } });
    if (account) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return account;
  }

  async update(id: number, updateUserDto: UpdateAccountDto) {
    const account = await this.accountRepository.findOne({ where: { id: id } });
    if (!account) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.accountRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const account = await this.accountRepository.findOne({ where: { id: id } });
    if (!account) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.accountRepository.delete(id);
  }
}
