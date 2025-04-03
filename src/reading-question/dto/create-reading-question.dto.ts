import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateReadingQuestionDto {
    @IsNumber()
    @IsNotEmpty()
    question_number: number

    @IsString()
    @IsNotEmpty()
    question_text: string

    @IsArray()
    @IsNotEmpty()
    answer_variants: string[]

    @IsArray()
    @IsNotEmpty()
    correct_variant: string[]

    @IsString()
    @IsNotEmpty()
    reading_part_qestion_id: string
}
