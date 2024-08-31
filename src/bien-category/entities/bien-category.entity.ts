import { Bien } from 'src/bien/entities/bien.entity';
import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bien-category' })
export class BienCategory {
  @PrimaryGeneratedColumn()
  name: string;

  @ManyToMany(() => Bien, (biens) => biens.bienCategories)
  biens: Bien[];

  constructor(name: string) {
    this.name = name;
  }
}
