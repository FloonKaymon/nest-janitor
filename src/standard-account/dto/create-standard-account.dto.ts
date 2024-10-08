import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStandardAccountDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  town: string;

  @IsNotEmpty()
  encodedPassword: string;

  @IsNotEmpty()
  photoUrl: string;

  @IsOptional()
  subscription: number;

  @IsOptional()
  @IsDate()
  subscriptionDate: Date;
}
