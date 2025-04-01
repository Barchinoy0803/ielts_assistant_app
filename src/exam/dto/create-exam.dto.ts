import { IsNotEmpty, IsString } from "class-validator"

export class CreateExamDto {
    @IsString()
    @IsNotEmpty()
    reading_variant_id: string

    @IsString()
    @IsNotEmpty()
    listening_variant_id: string

    @IsString()
    @IsNotEmpty()
    writing_variant_id: string

    @IsString()
    @IsNotEmpty()
    speaking_variant_id: string

    @IsString()
    @IsNotEmpty()
    student_id: string
}

