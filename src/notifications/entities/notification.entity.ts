import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('datetime')
  deadline: string;

  @Column('boolean')
  isResolved: boolean;

  @Column('boolean')
  isDeleted: boolean;
}
