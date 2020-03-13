import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as config from 'config';

import { Player } from './players/player.entity';
import { Club } from './clubs/club.entity';
import { Sponsor } from './sponsors/sponsor.entity';
import { Organizer } from './organizers/organizer.entity';
import { Tournament } from './tournaments/tournament.entity';
import { Match } from './matches/match.entity';

import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { OrganizersModule } from './organizers/organizers.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { MatchesModule } from './matches/matches.module';

const dbConfig = config.get('db');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [Player, Club, Organizer, Sponsor, Tournament, Match],
      synchronize: true,
    }),
    PlayersModule,
    ClubsModule,
    OrganizersModule,
    SponsorsModule,
    TournamentsModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
