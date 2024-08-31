import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  adress: string;

  @IsNotEmpty()
  town: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  encodedPassword: string;
}
