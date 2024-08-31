import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import { PhotoBien } from 'src/photo-bien/entities/photo-bien.entity';
import {
  Column,
  Entity,
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

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  town: string;

  @Column()
  numberOfRooms: number;

  @Column()
  price: number;

  @Column()
  surface: number;

  @Column()
  status: string;

  @Column()
  personCapacity: number;

  @ManyToOne(() => StandardAccount, (standardAccount) => standardAccount.biens)
  standardAccount: StandardAccount;

  @OneToMany(() => PhotoBien, (photoBiens) => photoBiens.bien)
  photoBiens: PhotoBien[];

  @OneToMany(() => Reservation, (reservations) => reservations.bien)
  reservations: Reservation[];

  @OneToMany(() => Commentaire, (commentaires) => commentaires.bien)
  commentaires: Commentaire[];

  @ManyToMany(() => BienCategory, (bienCategories) => bienCategories.biens)
  bienCategories: BienCategory[];

  constructor(
    id: number,
    address: string,
    description: string,
    town: string,
    numberOfRooms: number,
    price: number,
    surface: number,
    status: string,
    personCapacity: number,
  ) {
    this.id = id;
    this.address = address;
    this.description = description;
    this.town = town;
    this.numberOfRooms = numberOfRooms;
    this.price = price;
    this.surface = surface;
    this.status = status;
    this.personCapacity = personCapacity;
  }
}
