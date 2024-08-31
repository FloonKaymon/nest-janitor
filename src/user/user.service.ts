import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Association } from 'src/association/entities/association.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const association = await this.associationRepository.findOne({
      where: { name: createUserDto.associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.save(createUserDto);
  }
  async findAllByAssociation(associationName: string) {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const users = this.userRepository.find({
      where: { associationName: associationName },
    });
    if (!users) {
      throw new HttpException('Users not found', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  async findOne(id: number, associationName: string) {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne({
      where: { id: id, associationName: associationName },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const association = await this.associationRepository.findOne({
      where: { name: updateUserDto.associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number, associationName: string) {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.delete(id);
  }
}
