/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AlatBeratService } from './alat-berat.service';
import { AlatBeratController } from './alat-berat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlatBerat } from './alat-berat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlatBerat])],
  providers: [AlatBeratService],
  controllers: [AlatBeratController],
})
export class AlatBeratModule {}
