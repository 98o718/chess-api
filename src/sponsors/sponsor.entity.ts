import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Tournament } from '../tournaments/tournament.entity';

@Entity()
export class Sponsor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Tournament,
    tournament => tournament.sponsors,
  )
  tournaments: Tournament[];
}
