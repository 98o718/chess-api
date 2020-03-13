import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Club } from '../clubs/club.entity';
import { Match } from '../matches/match.entity';
import { Tournament } from '../tournaments/tournament.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  tel: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  rank: string;

  @ManyToOne(
    type => Club,
    club => club.players,
    { onDelete: 'CASCADE' },
  )
  // @JoinTable()
  club: Club;

  @ManyToMany(
    type => Tournament,
    tournament => tournament.players,
  )
  @JoinTable()
  tournaments: Tournament[];

  @ManyToMany(
    type => Match,
    match => match.players,
  )
  @JoinTable()
  matches: Match[];
}
