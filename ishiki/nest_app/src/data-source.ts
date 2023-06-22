import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Sampledata } from './sampledata.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite3',
  synchronize: true,
  logging: false,
  entities: [Sampledata],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
});
