import * as dotenv from 'dotenv';

import { IConfig } from './config.interface';

dotenv.config();

export default (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8000,

  jwt: {
    accessTokenExpiration: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },

  newPasswordBytes: 4,
  codeBytes: 2,
});
