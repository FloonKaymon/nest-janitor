import { PrestationUnitaire } from 'src/prestation-unitaire/entities/prestation-unitaire.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'factureClient' })
export class FactureClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @ManyToOne(() => StandardAccount, (standardAccount) => standardAccount.factureClients)
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;

}
