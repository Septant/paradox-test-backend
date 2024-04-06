import {Tag} from "../../tags/entities/tag.entity";

export class CreateNoteDto {
  id: number;
  title: string;
  text: string;
  notifyTime: string;
  tags: Omit<Tag[], 'isDeleted'>;
}
