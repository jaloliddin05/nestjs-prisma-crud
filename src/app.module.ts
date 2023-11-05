import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/_prisma/prisma.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { SubCategoryModule } from './modules/sub-category/sub-category.module';
import { OrderModule } from './modules/order/order.module';
@Module({
  imports: [UserModule, AuthModule, PrismaModule, ProductModule, CategoryModule, SubCategoryModule, OrderModule],
})
export class AppModule {}
