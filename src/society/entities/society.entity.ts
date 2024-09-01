import { StandardAccount } from "src/standard-account/entities/standard-account.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'society' })
export class Society {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    siret: string;

    @Column()
    address: string;

    @Column()
    town: string;

    @Column({default: 0})
    status: number;

    @Column({type: 'text'})
    description: string;

    @Column()
    website: string;

    @Column()
    logoUrl: string;

    @Column({name: 'standard_account_id'})
    standardAccountId: number;

    @OneToOne(() => StandardAccount, (standardAccount) => standardAccount.society)
    @JoinColumn({ name: 'standard_account_id' })
    standardAccount: StandardAccount;
}
