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
  address: string;

  @Column()
  town: string;

  @Column()
  encodedPassword: string;

  @Column()
  photoUrl: string;

  @OneToMany(() => Bien, (biens) => biens.standardAccount)
  biens: Bien[];

  @OneToMany(() => Reservation, (reservations) => reservations.standardAccount)
  reservations: Reservation[];

  @OneToMany(() => Commentaire, (commentaires) => commentaires.standardAccount)
  commentaires: Commentaire[];

}
