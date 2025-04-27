/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateAlatBeratDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  jenis: string;

  @IsDecimal()
  hargaSewa: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
