import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Match } from './match.entity';
import { MatchesService } from './matches.service';

@Crud({
  model: {
    type: Match,
  },
  query: {
    join: {
      players: {
        eager: true,
      },
      tournament: {
        eager: true,
      },
    },
  },
})
@Controller('matches')
export class MatchesController {
  constructor(public service: MatchesService) {}
}
