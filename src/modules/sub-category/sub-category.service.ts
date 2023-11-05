import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SubCategoryService {
  constructor(
    private readonly prismaClient:PrismaClient
  ){}

  async create(data: CreateSubCategoryDto) {
    return await this.prismaClient.subCategory.create({data})
  }

  async findAll() {
    return await this.prismaClient.subCategory.findMany()
  }

  async findOne(id: string) {
    return await this.prismaClient.subCategory.findUnique({where:{id}})
  }

  async update(id: string, data: UpdateSubCategoryDto) {
    return await this.prismaClient.subCategory.update({data,where:{id}})
  }

  async remove(id: string) {
    return await this.prismaClient.subCategory.delete({where:{id}})
  }
}
