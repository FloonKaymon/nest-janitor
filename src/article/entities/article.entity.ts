import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Association } from '../../association/entities/association.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'article' })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: number;

  @Column()
  associationId: number;

  @ManyToOne(() => Association, (association) => association.articles)
  association: Association;

  @ManyToOne(() => User, (user) => user.articles)
  users: User;

  constructor(
    id: number,
    title: string,
    description: string,
    content: string,
    createdAt: Date,
    createdBy: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.content = content;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
  }
}
