import { READING_QUESTION_TYPE } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateReadingPartQuestionDto {
    @IsString()
    @IsNotEmpty()
    description: string

    @IsEnum(READING_QUESTION_TYPE)
    question_type: READING_QUESTION_TYPE

    @IsNotEmpty()
    @IsString()
    reading_part_id: string
}
