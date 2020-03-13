import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Player } from '../players/player.entity';
import { Tournament } from '../tournaments/tournament.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  begin: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @Column()
  result: string;

  @ManyToMany(
    type => Player,
    player => player.matches,
    {
      onDelete: 'CASCADE',
    },
  )
  players: Player[];

  @ManyToOne(
    type => Tournament,
    tournament => tournament.matches,
    {
      onDelete: 'CASCADE',
    },
  )
  tournament: Tournament;
}
