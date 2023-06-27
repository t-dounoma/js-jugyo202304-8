import { Body, Controller, Get, Post } from '@nestjs/common';
import { SampledataService } from './sampledata.service';
import { Sampledata } from 'src/sampledata.entity';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Controller('sampledata')
export class SampledataController {
  constructor(private readonly sampledataService: SampledataService) {}

  @Get('/')
  root(): Promise<Sampledata[]> {
    return this.sampledataService.getAll();
  }

  @Post('/add')
  async add(@Body() data: Sampledata): Promise<InsertResult> {
    return this.sampledataService.addSampledata(data);
  }
}
