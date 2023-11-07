import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateOrderDto) {
    return await this.prismaService.order.create({ data });
  }

  async findAll() {
    return await this.prismaService.order.findMany({
      include: {
        product: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.order.findUnique({
      where: {
        id,
      },
      include: {
        product: true,
      },
    });
  }

  async update(id: string, data: UpdateOrderDto) {
    return await this.prismaService.order.update({
      data,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prismaService.order.delete({ where: { id } });
  }
}
