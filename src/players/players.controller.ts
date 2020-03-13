import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Player } from './player.entity';
import { PlayersService } from './players.service';

@Crud({
  model: {
    type: Player,
  },
  query: {
    join: {
      club: {
        // eager: true,
        // allow: ['id', 'name'],
      },
      matches: {
        eager: true,
      },
      tournaments: {
        // eager: true,
        allow: ['id', 'name'],
      },
    },
  },
})
@Controller('players')
export class PlayersController {
  constructor(public service: PlayersService) {}
}
