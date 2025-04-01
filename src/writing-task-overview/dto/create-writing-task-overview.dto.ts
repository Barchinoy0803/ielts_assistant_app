import { WRITING_TASK_TYPE } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateWritingTaskOverviewDto {
    @IsString()
    @IsNotEmpty()
    writing_variant_id: string

    @IsEnum(WRITING_TASK_TYPE)
    task_type: WRITING_TASK_TYPE
}
