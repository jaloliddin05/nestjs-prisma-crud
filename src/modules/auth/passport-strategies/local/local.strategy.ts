import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
  ) {
    super({ usernameField: 'username' });
  }

  async validate(ussername: string, password: string) {
    const user = await this.authService.validateUserByUsernamePassword(
      ussername,
      password,
    );
    return user;
  }
}
