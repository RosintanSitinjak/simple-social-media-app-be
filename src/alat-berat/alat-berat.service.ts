/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlatBerat } from './alat-berat.entity';
import { CreateAlatBeratDto } from './dto/create-alat-berat.dto';
import { UpdateAlatBeratDto } from './dto/update-alat-berat.dto';

@Injectable()
export class AlatBeratService {
  constructor(
    @InjectRepository(AlatBerat)
    private alatBeratRepository: Repository<AlatBerat>,
  ) {}

  async create(createAlatBeratDto: CreateAlatBeratDto): Promise<AlatBerat> {
    const alatBerat = this.alatBeratRepository.create(createAlatBeratDto);
    return this.alatBeratRepository.save(alatBerat);
  }

  async findAll(): Promise<AlatBerat[]> {
    return this.alatBeratRepository.find();
  }

  async findOne(id: number): Promise<AlatBerat> {
    const alatBerat = await this.alatBeratRepository.findOne({ where: { id } });
    if (!alatBerat) {
      throw new Error('Alat Berat not found');
    }
    return alatBerat;
  }

  async update(id: number, updateData: UpdateAlatBeratDto): Promise<AlatBerat> {
    const alatBerat = await this.alatBeratRepository.findOne({ where: { id } });
    if (!alatBerat) {
      throw new Error('Alat Berat not found');
    }
    Object.assign(alatBerat, updateData);
    return this.alatBeratRepository.save(alatBerat);
  }

  async remove(id: number): Promise<void> {
    const alatBerat = await this.alatBeratRepository.findOne({ where: { id } });
    if (!alatBerat) {
      throw new Error('Alat Berat not found');
    }
    await this.alatBeratRepository.remove(alatBerat);
  }
}
