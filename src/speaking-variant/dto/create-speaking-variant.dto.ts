import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateSpeakingVariantDto {
    @IsString()
    @IsNotEmpty()
    variant_name: string

    @IsBoolean()
    @IsNotEmpty()
    isReady: boolean
}
