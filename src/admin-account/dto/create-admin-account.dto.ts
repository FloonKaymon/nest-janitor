import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAdminAccountDto {

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    encodedPassword: string;

}
