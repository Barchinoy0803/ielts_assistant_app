import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateReadingVariantDto {
    @IsString()
    @IsNotEmpty()
    variant_name: string

    @IsBoolean()
    @IsNotEmpty()
    isReady: boolean
}
