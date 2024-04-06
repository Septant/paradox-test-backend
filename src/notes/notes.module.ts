import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "./entities/note.entity";
import {Tag} from "../tags/entities/tag.entity";
import {NoteTagsTag} from "../many-to-many-tables/note-tag.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Note, Tag, NoteTagsTag])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
