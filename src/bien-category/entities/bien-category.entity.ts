import { Bien } from 'src/bien/entities/bien.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bien-category' })
export class BienCategory {
  @PrimaryColumn()
  name: string;

  @ManyToMany(() => Bien, (biens) => biens.bienCategories)
  @JoinTable({
    name: 'bien_category_bien',
    joinColumn: {
      name: 'bienCategoryId',
      referencedColumnName: 'name',
    },
    inverseJoinColumn: {
      name: 'bienId',
      referencedColumnName: 'id',
    },
  })
  biens: Bien[];
}
