import { Bien } from 'src/bien/entities/bien.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('commentaire')
export class Commentaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  note: number;

  @Column()
  date: Date;

  @Column({ name: 'bien_id' })
  bienId: number;

  @Column({ name: 'standard_account_id' })
  standardAccountId: number;

  @ManyToOne(() => Bien, (bien) => bien.commentaires)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;

  @ManyToOne(
    () => StandardAccount,
    (standardAccount) => standardAccount.commentaires,
  )
  @JoinColumn({ name: 'standard_account_id' })
  standardAccount: StandardAccount;
}
