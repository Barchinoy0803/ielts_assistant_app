import { IsNotEmpty, IsString } from "class-validator"

export class LoginCenterDto{
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
