import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Organizer } from './organizer.entity';
import { OrganizersService } from './organizers.service';

@Crud({
  model: {
    type: Organizer,
  },
  query: {
    join: {
      tournaments: {
        eager: true,
        // allow: ['id'],
      },
    },
  },
})
@Controller('organizers')
export class OrganizersController {
  constructor(public service: OrganizersService) {}
}
