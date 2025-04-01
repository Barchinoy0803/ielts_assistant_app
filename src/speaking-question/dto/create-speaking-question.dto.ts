import { IsNotEmpty, IsString } from "class-validator"

export class CreateSpeakingQuestionDto {
    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    task: string

    @IsString()
    image: string

    @IsString()
    @IsNotEmpty()
    speaking_part_id: string
}
