import { IsNotEmpty, IsOptional } from "class-validator";


export class CreateReservationDto {

    @IsNotEmpty()
    startDate: Date;
    
    @IsNotEmpty()
    endDate: Date;
    
    @IsOptional()
    lateCheckOut: number;
    
    @IsNotEmpty()
    standardAccountId: number;
    
    @IsNotEmpty()
    bienId: number;

}
