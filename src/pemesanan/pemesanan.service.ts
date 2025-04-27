/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pemesanan } from './pemesanan.entity';
import { CreatePemesananDto } from './dto/create-pemesanan.dto';

@Injectable()
export class PemesananService {
  constructor(
    @InjectRepository(Pemesanan)
    private readonly pemesananRepository: Repository<Pemesanan>,
  ) {}

  // CREATE
  async create(pemesananData: CreatePemesananDto): Promise<Pemesanan> {
    const pemesanan = this.pemesananRepository.create({
      ...pemesananData,
      tanggalMulai: new Date(pemesananData.tanggalMulai),
      tanggalSelesai: new Date(pemesananData.tanggalSelesai),
    });
    return this.pemesananRepository.save(pemesanan);
  }
  

  // READ ALL
  async findAll(): Promise<Pemesanan[]> {
    return this.pemesananRepository.find({ relations: ['user', 'alatBerat'] });
  }

  // READ ONE
  async findOne(id: number): Promise<Pemesanan> {
    const pemesanan = await this.pemesananRepository.findOne({
      where: { id },
      relations: ['user', 'alatBerat'],
    });
    if (!pemesanan) {
      throw new NotFoundException(`Pemesanan dengan ID ${id} tidak ditemukan`);
    }
    return pemesanan;
  }

  // UPDATE
  async update(id: number, updateData: Partial<Pemesanan>): Promise<Pemesanan> {
    const pemesanan = await this.findOne(id); // Pastikan pemesanan ada
    Object.assign(pemesanan, updateData);
    return this.pemesananRepository.save(pemesanan);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const pemesanan = await this.findOne(id); // Pastikan pemesanan ada
    await this.pemesananRepository.remove(pemesanan);
  }
}
