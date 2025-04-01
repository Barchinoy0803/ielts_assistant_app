import { SPEAKING_PART_TYPE } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateSpeakingPartDto {
    @IsEnum(SPEAKING_PART_TYPE)
    taskName: SPEAKING_PART_TYPE

    @IsString()
    @IsNotEmpty()
    speaking_variantId: string
}
