import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/user.entity';
// import { Post } from '../post/post.entity';
import { AlatBerat } from '../alat-berat/alat-berat.entity';
import { Pemesanan } from '../pemesanan/pemesanan.entity';
import { Post } from '@nestjs/common';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: Number(configService.get('POSTGRES_PORT')) || 5432,
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: [User, Post, AlatBerat, Pemesanan],
  migrations: ['dist/migrations/*.js'],
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
});
