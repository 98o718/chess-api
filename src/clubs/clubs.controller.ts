import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Club } from './club.entity';
import { ClubsService } from './clubs.service';

@Crud({
  model: {
    type: Club,
  },
  query: {
    join: {
      players: {
        eager: true,
        allow: ['id', 'lastName', 'firstName', 'rank'],
      },
    },
  },
})
@Controller('clubs')
export class ClubsController {
  constructor(public service: ClubsService) {}
}
