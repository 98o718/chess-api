import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Club } from './club.entity';

@Injectable()
export class ClubsService extends TypeOrmCrudService<Club> {
  constructor(
    @InjectRepository(Club) private readonly clubsRepository: Repository<Club>,
  ) {
    super(clubsRepository);
  }
}
