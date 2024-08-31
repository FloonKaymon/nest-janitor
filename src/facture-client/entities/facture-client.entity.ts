import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'factureClient' })
export class FactureClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  url: string;

  @OneToMany(
    () => PrestationUnitaire,
    (prestationUnitaires) => prestationUnitaires.factureClient,
  )
  prestationUnitaires: PrestationUnitaire[];

  @OneToOne(() => Reservation, (reservation) => reservation.factureClient)
  reservation: Reservation;

  constructor(id: number, date: Date, status: string, url: string) {
    this.id = id;
    this.date = date;
    this.status = status;
    this.url = url;
  }
}
