import { CENTER_ROLE, STATUS } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateEducationalCenterDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    document: string

    @IsString()
    @IsNotEmpty()
    location: string

    @IsString()
    @IsNotEmpty()
    regionId: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsEnum(STATUS)
    status: STATUS

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsEnum(CENTER_ROLE)
    role: CENTER_ROLE
}
