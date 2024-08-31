import { Bien } from 'src/bien/entities/bien.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photo-bien' })
export class PhotoBien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  isMain: boolean;

  @ManyToOne(() => Bien, (bien) => bien.photoBiens)
  bien: Bien;

  constructor(id: number, path: string, isMain: boolean) {
    this.id = id;
    this.path = path;
    this.isMain = isMain;
  }
}
