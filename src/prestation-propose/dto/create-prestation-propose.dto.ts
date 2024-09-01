import { IsNotEmpty, IsOptional } from "class-validator";


export class CreatePrestationProposeDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsOptional()
    status: number;

    @IsOptional()
    unit: string;

    @IsNotEmpty()
    voyagerPay: number;

    @IsOptional()
    society: string;

    @IsNotEmpty()
    justificatif: string;

    @IsOptional()
    website: string;
}
