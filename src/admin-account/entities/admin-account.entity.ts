import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin-account' })
export class AdminAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  encodedPassword: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    encodedPassword: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.encodedPassword = encodedPassword;
  }
}
