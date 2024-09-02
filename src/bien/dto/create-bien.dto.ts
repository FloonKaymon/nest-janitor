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

  @IsNotEmpty()
  numberOfRooms: number;

  @IsNotEmpty()
  personCapacity: number;

  @IsNotEmpty()
  surface: number;

  @IsOptional()
  hasWifi: number;

  @IsOptional()
  hasParking: number;

  @IsOptional()
  hasBalcony: number;

  @IsOptional()
  hasGarden: number;

  @IsOptional()
  status: number;

  @IsOptional()
  price: number;
}
