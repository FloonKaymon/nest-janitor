import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationDto } from './create-association.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateAssociationDto extends PartialType(CreateAssociationDto) {
  @IsNotEmpty()
  accountId: number;

  @IsNotEmpty()
  name: string;

  logo: string;

  primaryColor: string;

  secondaryColor: string;
}
