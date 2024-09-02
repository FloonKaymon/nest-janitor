import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';
import { Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'prestation-category' })
export class PrestationCategory {
  @PrimaryColumn()
  name: string;

  @OneToMany(
    () => PrestationPropose,
    (prestationProposes) => prestationProposes.prestationCategory,
  )
  prestationProposes: PrestationPropose[];

}
