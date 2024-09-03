import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'prestation-category' })
export class PrestationCategory {
  @PrimaryColumn()
  name: string;

  @Column()
  voyagerPay: number;

  @Column()
  vip: number;


  @OneToMany(
    () => PrestationPropose,
    (prestationProposes) => prestationProposes.prestationCategory,
  )
  prestationProposes: PrestationPropose[];

}
