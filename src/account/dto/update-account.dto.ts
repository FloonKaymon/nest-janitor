import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  firstName: string;

  lastName: string;

  adress: string;

  town: string;

  postalCode: string;

  encodedPassword: string;
}
