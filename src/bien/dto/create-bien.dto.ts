import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBienDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  town: string;

  @IsNotEmpty()
  standardAccountId: number;

  @IsOptional()
  numberOfRooms: number;

  @IsOptional()
  personCapacity: number;

  @IsOptional()
  surface: number;

  @IsOptional()
  status: string;

  @IsOptional()
  price: number;
}
