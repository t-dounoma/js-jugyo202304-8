import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Sampledata } from 'src/sampledata.entity';

@Injectable()
export class SampledataService {
  constructor(
    @InjectRepository(Sampledata)
    private readonly sampledataRepository: Repository<Sampledata>,
  ) {}

  async getAll(): Promise<Sampledata[]> {
    return await this.sampledataRepository.find();
  }

  async addSampledata(obj): Promise<InsertResult> {
    return this.sampledataRepository.insert(obj);
  }
}
