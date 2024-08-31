import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Association } from 'src/association/entities/association.entity';

@Entity({ name: 'ag' })
export class Ag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: number;

  @Column()
  beginningDate: Date;

  @ManyToOne(() => Association, (association) => association.ags)
  association: Association;

  @ManyToMany(() => User, (user) => user.ags)
  users: User[];
}
