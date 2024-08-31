import { IsNotEmpty } from "class-validator";

export class CreateBienDto {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    town: string;

    numberOfRooms: number;

    personCapacity: number;
    
    surface: number;
    
    status: string;

    price: number;
}
