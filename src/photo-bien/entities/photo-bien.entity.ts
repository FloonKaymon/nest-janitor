import { Bien } from 'src/bien/entities/bien.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photo-bien' })
export class PhotoBien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  isMain: boolean = false;

  @Column({ name: 'bien_id' })
  bienId: number;

  @ManyToOne(() => Bien, (bien) => bien.photoBiens)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;

}
