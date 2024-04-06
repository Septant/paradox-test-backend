import {Entity, PrimaryColumn} from 'typeorm';



@Entity()
export class NoteTagsTag {

  @PrimaryColumn()
  noteId: number;

  @PrimaryColumn()
  tagId: number;
}