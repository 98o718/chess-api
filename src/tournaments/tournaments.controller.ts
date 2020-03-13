import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Tournament } from './tournament.entity';
import { TournamentsService } from './tournaments.service';

@Crud({
  model: {
    type: Tournament,
  },
  query: {
    join: {
      sponsors: {
        eager: true,
      },
      players: {
        eager: true,
        allow: ['id', 'lastName'],
      },
      organizer: {
        eager: true,
      },
    },
  },
})
@Controller('tournaments')
export class TournamentsController {
  constructor(public service: TournamentsService) {}
}
