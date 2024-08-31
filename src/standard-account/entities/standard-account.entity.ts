import { Bien } from 'src/bien/entities/bien.entity';
import { Commentaire } from 'src/commentaire/entities/commentaire.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'standardAccount' })
export class StandardAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  adress: string;

  @Column()
  town: string;

  @Column()
  postalCode: string;

  @Column()
  encodedPassword: string;

  @OneToMany(() => Bien, (biens) => biens.standardAccount)
  biens: Bien[];

  @OneToMany(() => Reservation, (reservations) => reservations.standardAccount)
  reservations: Reservation[];

  @OneToMany(() => Commentaire, (commentaires) => commentaires.standardAccount)
  commentaires: Commentaire[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    adress: string,
    town: string,
    postalCode: string,
    encodedPassword: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.adress = adress;
    this.town = town;
    this.postalCode = postalCode;
    this.encodedPassword = encodedPassword;
  }
}
