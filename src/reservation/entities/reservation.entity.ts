import { Bien } from 'src/bien/entities/bien.entity';
import { FactureClient } from 'src/facture-client/entities/facture-client.entity';
import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'reservation' })
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  lateCheckOut: boolean;

  @Column()
  status: string;

  @ManyToOne(
    () => StandardAccount,
    (standardAccount) => standardAccount.reservations,
  )
  standardAccount: StandardAccount;

  @OneToMany(
    () => PrestationUnitaire,
    (prestationUnitaires) => prestationUnitaires.reservation,
  )
  prestationUnitaires: PrestationUnitaire[];

  @ManyToOne(() => Bien, (bien) => bien.reservations)
  bien: Bien;

  @OneToOne(() => FactureClient, (factureClient) => factureClient.reservation)
  factureClient: FactureClient;

  constructor(
    id: number,
    startDate: Date,
    endDate: Date,
    lateCheckOut: boolean,
    status: string,
  ) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.lateCheckOut = lateCheckOut;
    this.status = status;
  }
}
