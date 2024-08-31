import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { User } from '../../user/entities/user.entity';
import { Account } from '../../account/entities/account.entity';
import { Event } from '../../event/entities/event.entity';
import { Ag } from '../../ag/entities/ag.entity';

@Entity({ name: 'association' })
export class Association {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  accountId: number;

  @Column()
  logo: string;

  @Column()
  primaryColor: string;

  @Column()
  secondaryColor: string;

  @OneToMany(() => Article, (article) => article.association)
  articles: Article[];

  @OneToMany(() => User, (user) => user.association)
  users: User[];

  @OneToMany(() => Event, (event) => event.association)
  events: Event[];

  @OneToOne(() => Account, (account) => account.association)
  account: Account;

  @OneToMany(() => Ag, (ag) => ag.association)
  ags: Ag[];

  constructor(
    id: number,
    accountId: number,
    name: string,
    logo: string,
    primaryColor: string,
    secondaryColor: string,
  ) {
    this.id = id;
    this.accountId = accountId;
    this.name = name;
    this.logo = logo;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
  }
}
