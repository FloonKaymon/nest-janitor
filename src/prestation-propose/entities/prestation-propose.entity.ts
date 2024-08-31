import { PrestataireAccount } from 'src/prestataire-account/entities/prestataire-account.entity';
import { PrestationCategory } from 'src/prestation-category/entities/prestation-category.entity';
import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import {
  Column,
  Entity,
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
  type: string;

  @Column()
  price: number;

  @Column()
  status: string;

  @Column()
  unit: string | null;

  @Column()
  voyagerPay: boolean;

  @ManyToOne(
    () => PrestataireAccount,
    (prestataireAccount) => prestataireAccount.prestationProposes,
  )
  prestataireAccount: PrestataireAccount;

  @OneToMany(
    () => PrestationUnitaire,
    (prestationUnitaires) => prestationUnitaires.prestationPropose,
  )
  prestationUnitaires: PrestationUnitaire[];

  @ManyToOne(
    () => PrestationCategory,
    (prestationCategory) => prestationCategory.prestationProposes,
  )
  prestationCategory: PrestationCategory;

  constructor(
    id: number,
    name: string,
    description: string,
    type: string,
    price: number,
    status: string,
    unit: string | null,
    voyagerPay: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.price = price;
    this.status = status;
    this.unit = unit;
    this.voyagerPay = voyagerPay;
  }
}
