import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Association } from '../../association/entities/association.entity';
import { Article } from '../../article/entities/article.entity';
import { Event } from '../../event/entities/event.entity';
import { Ag } from 'src/ag/entities/ag.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  adress: string;

  @Column()
  town: string;

  @Column()
  postalCode: string;

  @Column()
  encodedPassword: string;

  @Column()
  type: number;

  @Column()
  associationName: string;

  @ManyToOne(() => Association, (association) => association.users)
  association: Association;

  @OneToMany(() => Article, (article) => article.users)
  articles: Article[];

  @OneToMany(() => Event, (event) => event.users)
  events: Event[];

  @ManyToMany(() => Ag, (association) => association.users)
  ags: Ag[];

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    adress: string,
    town: string,
    postalCode: string,
    encodedPassword: string,
    associationName: string,
    type: number,
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.town = town;
    this.postalCode = postalCode;
    this.encodedPassword = encodedPassword;
    this.associationName = associationName;
    this.type = type;
  }
}
