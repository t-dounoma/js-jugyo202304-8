import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampledataModule } from './sampledata/sampledata.module';
import { Sampledata } from './sampledata.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      synchronize: true,
      entities: [Sampledata],
    }),
    SampledataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
