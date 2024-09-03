import { Bien } from 'src/bien/entities/bien.entity';
import { FactureClient } from 'src/facture-client/entities/facture-client.entity';
import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import {
  Column,
  Entity,
  JoinColumn,
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

  @Column({ default: 0 })
  lateCheckOut: number;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @Column({ name: 'bien_id' })
  bienId: number;

  @ManyToOne(
    () => StandardAccount,
    (standardAccount) => standardAccount.reservations,
  )
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;

  @OneToMany(
    () => PrestationUnitaire,
    (prestationUnitaires) => prestationUnitaires.reservation,
  )
  prestationUnitaires: PrestationUnitaire[];

  @ManyToOne(() => Bien, (bien) => bien.reservations)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;

  @OneToOne(() => FactureClient, (factureClient) => factureClient.reservation)
  factureClient: FactureClient;
}
