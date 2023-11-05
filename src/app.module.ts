import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/_prisma/prisma.module';
@Module({
  imports: [UserModule, AuthModule, PrismaModule],
})
export class AppModule {}
