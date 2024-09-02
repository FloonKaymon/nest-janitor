import { Bien } from 'src/bien/entities/bien.entity';
import {
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'bien-category' })
export class BienCategory {
  @PrimaryColumn()
  name: string;

  @OneToMany(() => Bien, (bien) => bien.bienCategory)
  biens: Bien[];
}
