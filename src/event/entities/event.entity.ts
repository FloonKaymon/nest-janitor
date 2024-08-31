import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Association } from '../../association/entities/association.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  privated: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: number;

  @Column()
  associationName: string;

  @ManyToOne(() => Association, (association) => association.articles)
  association: Association;

  @ManyToOne(() => User, (user) => user.articles)
  users: User;

  constructor(
    id: number,
    title: string,
    description: string,
    privated: boolean,
    createdAt: Date,
    createdBy: number,
    associationName: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.privated = privated;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.associationName = associationName;
  }
}
