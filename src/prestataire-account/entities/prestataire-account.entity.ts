import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prestataireAccount' })
export class PrestataireAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  encodedPassword: string;

  @Column()
  societyName: string;

  @Column()
  adress: string;

  @Column()
  town: string;

  @Column()
  postalCode: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(
    () => PrestationPropose,
    (prestationProposes) => prestationProposes.prestataireAccount,
  )
  prestationProposes: PrestationPropose[];

  constructor(
    id: number,
    encodedPassword: string,
    societyName: string,
    adress: string,
    town: string,
    postalCode: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    this.id = id;
    this.encodedPassword = encodedPassword;
    this.societyName = societyName;
    this.adress = adress;
    this.town = town;
    this.postalCode = postalCode;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
