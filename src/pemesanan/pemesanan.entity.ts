/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { AlatBerat } from '../alat-berat/alat-berat.entity';

@Entity('pemesanan')
export class Pemesanan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => AlatBerat, (alatBerat) => alatBerat.id)
  alatBerat: AlatBerat;

  @Column('timestamp')
  tanggalMulai: Date;

  @Column('timestamp')
  tanggalSelesai: Date;

  @Column('int')
  totalBiaya: number;

  @Column()
  status: string; // 'menunggu pembayaran', 'selesai'
}
