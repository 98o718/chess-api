import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tournament } from './tournament.entity';

@Injectable()
export class TournamentsService extends TypeOrmCrudService<Tournament> {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentsRepository: Repository<Tournament>,
  ) {
    super(tournamentsRepository);
  }
}
