/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pemesanan } from './pemesanan.entity';
import { PemesananService } from './pemesanan.service';
import { PemesananController } from './pemesanan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pemesanan])],
  providers: [PemesananService],
  controllers: [PemesananController],
})
export class PemesananModule {}
