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
  numberOfRooms: number = 0;

  @Column()
  price: number = 0;

  @Column()
  surface: number = 0;

  @Column({default: 0})
  status: number;

  @Column()
  personCapacity: number = 0;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @ManyToOne(() => StandardAccount, (standardAccount) => standardAccount.biens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;

  @OneToMany(() => PhotoBien, (photoBiens) => photoBiens.bien, { cascade: true })
  photoBiens: PhotoBien[];

  @OneToMany(() => Reservation, (reservations) => reservations.bien, { cascade: true })
  reservations: Reservation[];

  @OneToMany(() => Commentaire, (commentaires) => commentaires.bien, { cascade: true })
  commentaires: Commentaire[];

  @ManyToMany(() => BienCategory, (bienCategories) => bienCategories.biens)
  bienCategories: BienCategory[];
}
