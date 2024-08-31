import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminAccountDto } from './create-admin-account.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateAdminAccountDto extends PartialType(CreateAdminAccountDto) {
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    firstName: string;

    lastName: string;

    adress: string;

    encodedPassword: string;
}
