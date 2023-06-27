import { Controller, Get } from '@nestjs/common';
import { SampledataService } from './sampledata.service';
import { Sampledata } from 'src/sampledata.entity';

@Controller('sampledata')
export class SampledataController {
  constructor(private readonly sampledataService: SampledataService) {}

  @Get('/')
  root(): Promise<Sampledata[]> {
    return this.sampledataService.getAll();
  }
}
