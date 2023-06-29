import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
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

  async addSampledata(obj: object): Promise<InsertResult> {
    return this.sampledataRepository.insert(obj);
  }

  async getById(id: number): Promise<Sampledata> {
    return await this.sampledataRepository.findOneBy({ id: id });
  }

  async update(data: Sampledata): Promise<Sampledata> {
    const entity = await this.getById(data.id);
    entity.memo = data.memo;
    entity.mail = data.mail;
    entity.url = data.url;
    return await this.sampledataRepository.save(entity);
  }

  async delete(data: any): Promise<DeleteResult> {
    return await this.sampledataRepository.delete(data.id);
  }

  async find(data: any): Promise<Sampledata[]> {
    return await this.sampledataRepository.findBy({ mail: data.find });
  }
}
