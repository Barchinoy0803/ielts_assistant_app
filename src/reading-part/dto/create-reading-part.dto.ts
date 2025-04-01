import { IsNotEmpty, IsString } from "class-validator"

export class CreateReadingPartDto {
    @IsString()
    @IsNotEmpty()
    part_name: string

    @IsString()
    @IsNotEmpty()
    reading_variant_id: string
}
