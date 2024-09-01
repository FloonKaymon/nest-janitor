import { Bien } from 'src/bien/entities/bien.entity';
import { Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bien-category' })
export class BienCategory {
  @PrimaryColumn()
  name: string;

  @ManyToMany(() => Bien, (biens) => biens.bienCategories)
  @JoinTable()
  biens: Bien[];

}
 