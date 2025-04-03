import { STATUS } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    certificate: string

    @IsEnum(STATUS)
    status: STATUS

    @IsString()
    @IsOptional()
    image: string

    @IsString()
    @IsNotEmpty()
    centerId: string
}
