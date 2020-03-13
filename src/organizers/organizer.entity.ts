import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tournament } from '../tournaments/tournament.entity';

@Entity()
export class Organizer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Tournament,
    tournament => tournament.organizer,
  )
  tournaments: Tournament[];
}
