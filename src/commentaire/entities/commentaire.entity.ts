import { Bien } from 'src/bien/entities/bien.entity';
import { StandardAccount } from 'src/standard-account/entities/standard-account.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Bien, (bien) => bien.commentaires)
  bien: Bien;

  @ManyToOne(
    () => StandardAccount,
    (standardAccount) => standardAccount.commentaires,
  )
  standardAccount: StandardAccount;

  constructor(id: number, content: string, note: number, date: Date) {
    this.id = id;
    this.content = content;
    this.note = note;
    this.date = date;
  }
}
