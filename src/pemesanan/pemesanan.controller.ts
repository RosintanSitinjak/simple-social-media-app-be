/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PemesananService } from './pemesanan.service';
import { Pemesanan } from './pemesanan.entity';
import { CreatePemesananDto } from './dto/create-pemesanan.dto';
import { UpdatePemesananDto } from './dto/update-pemesanan.dto';

@Controller('pemesanan')
export class PemesananController {
  pemesananRepository: any;
  constructor(private readonly pemesananService: PemesananService) {}

  // CREATE
  @Post()
  async create(@Body() pemesananData: CreatePemesananDto): Promise<Pemesanan> {
    return this.pemesananService.create(pemesananData);
  }

  // READ ALL
  @Get()
  async findAll(): Promise<Pemesanan[]> {
    return this.pemesananService.findAll();
  }

  // READ ONE
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Pemesanan> {
    return this.pemesananService.findOne(id);
  }

  // UPDATE
  // @Patch(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateData: UpdatePemesananDto,
  // ): Promise<Pemesanan> {
  //   return this.pemesananService.update(id, updateData);
  // }

  async update(id: number, updateData: UpdatePemesananDto): Promise<Pemesanan> {
    const pemesanan = await this.pemesananRepository.findOne({
      where: { id },
    });
  
    if (!pemesanan) {
      throw new Error('Pemesanan not found');
    }
  
    const updatedFields: Partial<Pemesanan> = {
      ...updateData,
      tanggalMulai: updateData.tanggalMulai ? new Date(updateData.tanggalMulai) : undefined,
      tanggalSelesai: updateData.tanggalSelesai ? new Date(updateData.tanggalSelesai) : undefined,
    };
  
    Object.assign(pemesanan, updatedFields);
    return this.pemesananRepository.save(pemesanan);
  }
  

  // DELETE
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pemesananService.remove(id);
  }
}
