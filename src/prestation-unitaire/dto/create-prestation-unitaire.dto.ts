import { inheritTransformationMetadata } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePrestationUnitaireDto {

    @IsNotEmpty()
    informationComplementaire: string;

    @IsNotEmpty()
    nbrUnit: number;

    @IsNotEmpty()
    date: Date;

    @IsOptional()
    duree: number;

    @IsNotEmpty()
    prestationProposeId: number;

    @IsOptional()
    reservationId: number;

    @IsOptional()
    factureClientId: number;

    @IsOptional()
    bienId: number;
}
