import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../_prisma/prisma.service';
import { User } from './entities/user.entity';
import { hashPassword } from 'src/infra/helper';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService:PrismaService
  ){}

  async create(data: CreateUserDto) {
    const password = await hashPassword(data.password)
    return await this.prismaService.user.create({data:{...data,password}})
  }

  async findAll() {
    return await this.prismaService.user.findMany()
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({where:{id}})
  }

  async findByUsername(username:string):Promise<User>{
    return await this.prismaService.user.findUnique({
      where:{
        username
      }
    })
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.prismaService.user.update({data,where:{id}})
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({where:{id}})
  }
}
