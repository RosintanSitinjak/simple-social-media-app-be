/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AlatBeratService } from './alat-berat.service';
import { AlatBerat } from './alat-berat.entity';
import { CreateAlatBeratDto } from './dto/create-alat-berat.dto';
import { UpdateAlatBeratDto } from './dto/update-alat-berat.dto';

@Controller('alat-berat')
export class AlatBeratController {
  constructor(private readonly alatBeratService: AlatBeratService) {}

  @Post()
  async create(@Body() createAlatBeratDto: CreateAlatBeratDto): Promise<AlatBerat> {
    return this.alatBeratService.create(createAlatBeratDto);
  }

  @Get()
  async findAll(): Promise<AlatBerat[]> {
    return this.alatBeratService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AlatBerat> {
    return this.alatBeratService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateData: UpdateAlatBeratDto): Promise<AlatBerat> {
    return this.alatBeratService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.alatBeratService.remove(id);
  }
}
