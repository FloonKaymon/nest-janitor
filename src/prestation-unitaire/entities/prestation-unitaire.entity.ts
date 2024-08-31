import { FactureClient } from 'src/facture-client/entities/facture-client.entity';
import { PrestationPropose } from 'src/prestation-propose/entities/prestation-propose.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prestationUnitaire' })
export class PrestationUnitaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  informationComplementaire: string;

  @Column()
  nbrUnit: number;

  @ManyToOne(
    () => PrestationPropose,
    (prestationPropose) => prestationPropose.prestationUnitaires,
  )
  prestationPropose: PrestationPropose;

  @ManyToOne(
    () => Reservation,
    (reservation) => reservation.prestationUnitaires,
  )
  reservation: Reservation;

  @ManyToOne(
    () => FactureClient,
    (factureClient) => factureClient.prestationUnitaires,
  )
  factureClient: FactureClient;

  constructor(id: number, informationComplementaire: string, nbrUnit: number) {
    this.id = id;
    this.informationComplementaire = informationComplementaire;
    this.nbrUnit = nbrUnit;
  }
}
