import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prismaService:PrismaService
  ){}

  async create(data: CreateCategoryDto) {
    return await this.prismaService.category.create({data})
  }

  async findAll() {
    return await this.prismaService.category.findMany({
      include:{
        subCategories:true
      }
    })
  }

  async findOne(id: string) {
    return await this.prismaService.category.findUnique({
      where:{id},
      include:{
        subCategories:true
      }
    })
  }

  async update(id: string, data: UpdateCategoryDto) {
    return await this.prismaService.category.update({data,where:{id}})
  }

  async remove(id: string) {
    return await this.prismaService.category.delete({where:{id}})
  }
}
