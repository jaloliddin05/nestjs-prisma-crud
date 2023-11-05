import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class SubCategoryService {
  constructor(
    private readonly prismaService:PrismaService
  ){}

  async create(data: CreateSubCategoryDto) {
    return await this.prismaService.subCategory.create({data})
  }

  async findAll() {
    return await this.prismaService.subCategory.findMany()
  }

  async findOne(id: string) {
    return await this.prismaService.subCategory.findUnique({
      where:{id},
      include:{
        products:true
      }
    })
  }

  async update(id: string, data: UpdateSubCategoryDto) {
    return await this.prismaService.subCategory.update({data,where:{id}})
  }

  async remove(id: string) {
    return await this.prismaService.subCategory.delete({where:{id}})
  }
}
