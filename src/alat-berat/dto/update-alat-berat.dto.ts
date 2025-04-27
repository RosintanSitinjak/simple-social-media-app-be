/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsDecimal } from 'class-validator';

export class UpdateAlatBeratDto {
  @IsOptional()
  @IsString()
  nama?: string;

  @IsOptional()
  @IsString()
  jenis?: string;

  @IsOptional()
  @IsDecimal()
  hargaSewa?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
