/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alat_berat')
export class AlatBerat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  jenis: string;

  @Column('decimal')
  hargaSewa: number;

  @Column()
  status: string; // Misalnya 'tersedia' atau 'disewa'
}
