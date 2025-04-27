/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreatePemesananDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  alatBeratId: number;

  @IsDateString()
  @IsNotEmpty()
  tanggalMulai: string;

  @IsDateString()
  @IsNotEmpty()
  tanggalSelesai: string;
}
