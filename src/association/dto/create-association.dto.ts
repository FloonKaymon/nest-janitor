import { IsNotEmpty } from 'class-validator';

export class CreateAssociationDto {
  @IsNotEmpty()
  accountId: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  logo: string;

  @IsNotEmpty()
  primaryColor: string;

  @IsNotEmpty()
  secondaryColor: string;
}
