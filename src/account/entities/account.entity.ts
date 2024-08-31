import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Association } from '../../association/entities/association.entity';

@Entity({ name: 'account' })
export class Account {
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

  @OneToOne(() => Association, (association) => association.account)
  association: Association;

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
