import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  privated: boolean;

  @IsNotEmpty()
  createdBy: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  associationName: string;
}
