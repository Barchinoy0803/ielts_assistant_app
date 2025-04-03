import { IsNotEmpty, IsString } from "class-validator"

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    fullname: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    groupId: string
}
