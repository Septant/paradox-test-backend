import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  value: string;

  @Column('boolean')
  isUsed: boolean;

  @Column('boolean')
  isDeleted: boolean;

}
