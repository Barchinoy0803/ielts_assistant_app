import { IsNotEmpty, IsString } from "class-validator"

export class CreateWritingTaskDto {
    @IsString()
    @IsNotEmpty()
    task_name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    image: string

    @IsString()
    @IsNotEmpty()
    writing_task_overview_id: string
}
