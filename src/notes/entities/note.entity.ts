import {Tag} from "../../tags/entities/tag.entity";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Note {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title: string;

  @Column("text")
  text: string;

  @Column("text")
  notifyTime: string;

  @Column('boolean')
  isDeleted: boolean = false;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
