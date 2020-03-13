import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Sponsor } from '../sponsors/sponsor.entity';
import { Player } from '../players/player.entity';
import { Organizer } from '../organizers/organizer.entity';
import { Match } from '../matches/match.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  begin: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @ManyToMany(
    type => Sponsor,
    sponsor => sponsor.tournaments,
  )
  @JoinTable()
  sponsors: Sponsor[];

  @ManyToMany(
    type => Player,
    player => player.tournaments,
  )
  players: Player[];

  @OneToMany(
    type => Match,
    match => match.tournament,
  )
  matches: Match[];

  @ManyToOne(
    type => Organizer,
    organizer => organizer.tournaments,
    {
      onDelete: 'CASCADE',
    },
  )
  organizer: Organizer;
}
