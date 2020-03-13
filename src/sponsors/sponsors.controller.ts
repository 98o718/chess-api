import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Sponsor } from './sponsor.entity';
import { SponsorsService } from './sponsors.service';

@Crud({
  model: {
    type: Sponsor,
  },
  query: {
    join: {
      tournaments: {
        eager: true,
        // allow: ['id, name'],
      },
    },
  },
})
@Controller('sponsors')
export class SponsorsController {
  constructor(public service: SponsorsService) {}
}
