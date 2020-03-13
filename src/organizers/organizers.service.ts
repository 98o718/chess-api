import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Organizer } from './organizer.entity';

@Injectable()
export class OrganizersService extends TypeOrmCrudService<Organizer> {
  constructor(
    @InjectRepository(Organizer)
    private readonly organizersRepository: Repository<Organizer>,
  ) {
    super(organizersRepository);
  }
}
