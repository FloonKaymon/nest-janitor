import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import { PhotoBien } from 'src/photo-bien/entities/photo-bien.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Commentaire } from 'src/commentaire/entities/commentaire.entity';
import { BienCategory } from 'src/bien-category/entities/bien-category.entity';
import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';

@Entity({ name: 'bien' })
export class Bien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  address: string;

  @Column()
  town: string;

  @Column()
  numberOfRooms : number;

  @Column({default: 0})
  price: number;

  @Column()
  surface: number;

  @Column({default: 0})
  status: number;

  @Column()
  personCapacity: number = 0;

  @Column({default: 0})
  hasWifi: number;

  @Column({default: 0})
  hasParking: number;

  @Column({default: 0})
  hasBalcony: number;

  @Column({default: 0})
  hasGarden: number;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @Column({ name: 'bien_category_id' })
  bienCategoryId: string;

  @ManyToOne(() => StandardAccount, (standardAccount) => standardAccount.biens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;

  @OneToMany(() => PhotoBien, (photoBiens) => photoBiens.bien, { cascade: true })
  photoBiens: PhotoBien[];

  @OneToMany(() => Reservation, (reservations) => reservations.bien, { cascade: true })
  reservations: Reservation[];

  @OneToMany(() => Commentaire, (commentaires) => commentaires.bien, { cascade: true })
  commentaires: Commentaire[];

  @OneToMany(() => PrestationUnitaire, (prestationUnitaires) => prestationUnitaires.bien, { cascade: true })
  prestationUnitaires: PrestationUnitaire[];

  @ManyToOne(() => BienCategory, (bienCategory) => bienCategory.biens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bien_category_id' })
  bienCategory: BienCategory;

}
