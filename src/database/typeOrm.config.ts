import { DataSource } from 'typeorm';

import * as path from 'path';
import { configs } from 'src/config';






export default new DataSource({
  type: 'postgres',
  host: configs.DB_HOST,
  port: configs.DB_PORT,
  username: configs.DB_USERNAME,
  password: configs.DB_PASSWORD,
  database: configs.DB_DATABASE,
  entities: [path.join(__dirname, '/entities/*.entity.{.ts,js}')],
  migrations: [path.join(__dirname, '/migrations/*{.ts,js}')],
});
