import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sponsor } from './sponsor.entity';

@Injectable()
export class SponsorsService extends TypeOrmCrudService<Sponsor> {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorsRepositoy: Repository<Sponsor>,
  ) {
    super(sponsorsRepositoy);
  }
}
