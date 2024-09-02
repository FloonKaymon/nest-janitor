import { FactureClient } from 'src/facture-client/entities/facture-client.entity';
import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'prestationUnitaire' })
export class PrestationUnitaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  informationComplementaire: string;

  @Column()
  nbrUnit: number;

  @Column({type: 'datetime'})
  date: Date;

  @Column({default: 60})
  duree: number;

  @Column({ name: 'prestation_propose_id' })
  prestationProposeId: number;

  @Column({ name: 'reservation_id' })
  reservationId: number;

  @Column({ name: 'facture_client_id' })
  factureClientId: number;

  @ManyToOne(
    () => PrestationPropose,
    (prestationPropose) => prestationPropose.prestationUnitaires,
  )
  @JoinColumn({ name: 'prestation_propose_id' })
  prestationPropose: PrestationPropose;

  @ManyToOne(
    () => Reservation,
    (reservation) => reservation.prestationUnitaires,
  )
  @JoinColumn({ name: 'reservation_id' })
  reservation: Reservation;

  @ManyToOne(
    () => FactureClient,
    (factureClient) => factureClient.prestationUnitaires,
  )
  @JoinColumn({ name: 'facture_client_id' })
  factureClient: FactureClient;

  constructor(id: number, informationComplementaire: string, nbrUnit: number) {
    this.id = id;
    this.informationComplementaire = informationComplementaire;
    this.nbrUnit = nbrUnit;
  }
}
