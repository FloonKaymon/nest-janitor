import { PrestationCategory } from 'src/prestation-category/entities/prestation-category.entity';
import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('prestation-propose')
export class PrestationPropose {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  status: number;

  @Column()
  unit: string = '';

  @Column()
  voyagerPay: number;

  @Column({ default: '' })
  society: string;

  @Column()
  justificatif: string;

  @Column({ default: '' })
  website: string;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @Column({ name: 'prestation_category_id' })
  prestationCategoryId: string;

  @ManyToOne(
    () => StandardAccount,
    (standardAccount) => standardAccount.prestationProposes,
  )
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;

  @ManyToOne(
    () => PrestationCategory,
    (prestationCategory) => prestationCategory.prestationProposes,
  )
  @JoinColumn({ name: 'prestation_category_id' })
  prestationCategory: PrestationCategory;

  @OneToMany(
    () => PrestationUnitaire,
    (prestationUnitaires) => prestationUnitaires.prestationPropose,
  )
  prestationUnitaires: PrestationUnitaire[];
}
