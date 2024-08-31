import { IsNotEmpty } from "class-validator";

export class CreatePhotoBienDto {
    @IsNotEmpty()
    path: string;

    @IsNotEmpty()
    isMain: boolean;

    @IsNotEmpty()
    bienId: number;

}
