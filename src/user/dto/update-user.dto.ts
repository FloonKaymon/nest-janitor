import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  firstName: string;

  lastName: string;

  adress: string;

  town: string;

  postalCode: string;

  encodedPassword: string;

  associationName: string;

  type: number;
}
