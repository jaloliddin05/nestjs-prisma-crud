import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { AccessTokenUserStrategy } from './passport-strategies/access-token-user/access-token-user.strategy'
import { LocalStrategy } from './passport-strategies/local/local.strategy';
import { RefreshTokenUserStrategy } from './passport-strategies/refresh-token-user/refresh-token-user.strategy'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        const jwtConfig = configService.getOrThrow('jwt');
        return {
          secret: jwtConfig.accessTokenSecret,
          signOptions: { expiresIn: jwtConfig.accessTokenExpiration },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    AccessTokenUserStrategy,
    LocalStrategy,
    RefreshTokenUserStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
