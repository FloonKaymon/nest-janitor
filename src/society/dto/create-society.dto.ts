import { IsNotEmpty } from "class-validator";

export class CreateSocietyDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    siret: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    town: string;

    @IsNotEmpty()
    standardAccountId: number;
}
