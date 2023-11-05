import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prismaService:PrismaService
  ){}

  async create(data: CreateProductDto) {
    return await this.prismaService.product.create({data})
  }

  async findAll() {
    return await this.prismaService.product.findMany({})
  }

  async findOne(id: string) {
    return await this.prismaService.product.findUnique({
      where:{id},
      include:{
        subCategory:{
          include:{
            category:true
          }
        }
      }
    })
  }

  async update(id: string, data: UpdateProductDto) {
    return await this.prismaService.product.update({data,where:{id}})
  }

  async remove(id: string) {
    return await this.prismaService.product.delete({where:{id}})
  }
}
