import {Injectable} from '@nestjs/common';
import {CreateNoteDto} from './dto/create-note.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Note} from "./entities/note.entity";
import {Tag} from "../tags/entities/tag.entity";
import {NoteTagsTag} from "../many-to-many-tables/note-tag.entity";

@Injectable()
export class NotesService {

  constructor(@InjectRepository(Note)
              private notesRepository: Repository<Note>,
              @InjectRepository(Tag)
              private tagsRepository: Repository<Tag>,
              @InjectRepository(NoteTagsTag)
              private noteTagsRepo: Repository<NoteTagsTag>) {
  }

  // создание/удаление записки. В процессе проверяет редактируемость тегов и обновляет связи с ними
  save(createNoteDto: CreateNoteDto) {
    const note = new Note();

    note.id = createNoteDto.id !== 0 ? createNoteDto.id : null;
    note.title = createNoteDto.title;
    note.text = createNoteDto.text;
    note.notifyTime = createNoteDto.notifyTime;
    note.tags = createNoteDto.tags;

    if (note.id !== null) {
      return this.notesRepository.findOne({where: {id: note.id}, relations: ['tags']}).then(async item => {

        const oldTags = item.tags ? item.tags.map(tag => tag.id) : [];
        const newTags = note.tags ? note.tags.map(tag => tag.id) : [];

        if (!oldTags.length && !newTags.length) {
          return this.notesRepository.save(note);
        }

        // были старые
        if (oldTags.length && !newTags.length) {
          return this.noteTagsRepo.delete({noteId: note.id})
            .then(() => this.notesRepository.save(note))
            .then((savedNote: Note): Note => {
              oldTags.forEach(oldTagId => this.noteTagsRepo.count({where: {tagId: oldTagId}})
                .then(isUsedCounter => isUsedCounter === 0
                  ? this.tagsRepository.update(oldTagId, {isUsed: false})
                  : null));
              return savedNote;
            });
        }

        if (!oldTags.length && newTags.length) {
          this.tagsRepository.update(newTags, {isUsed: true}).then(() => this.notesRepository.save(note));
          return this.notesRepository.save(note);
        }

        const newWithoutOld = newTags.filter(newTag => !oldTags.includes(newTag));
        const oldWithoutNew = oldTags.filter(oldTag => !newTags.includes(oldTag));

        return this.noteTagsRepo.delete({noteId: note.id})
          .then(() => this.notesRepository.save(note))
          .then((savedNote: Note) => newWithoutOld.length ? this.tagsRepository.update(newWithoutOld, {isUsed: true}).then(() => savedNote) : savedNote)
          .then((savedNote: Note) => {
            oldWithoutNew.length
              ? oldWithoutNew.forEach(oldTagId => this.noteTagsRepo.count({where: {tagId: oldTagId}})
                .then((counted) => counted === 0
                  ? this.tagsRepository.update(oldTagId, {isUsed: false}).then(() => savedNote)
                  : null))
              : null;
            return savedNote;
          })
      });
    }
    this.tagsRepository.update(note.tags.map(tag => tag.id), {isUsed: true});
    return this.notesRepository.save(note);

  }

  async findAll() {
    return await this.notesRepository.find({
      select: ['id', 'title', 'text', 'notifyTime'],
      where: {isDeleted: false},
      relations: ['tags']
    })
  }

  findOne(id: number) {
    return this.notesRepository.findOne({
      select: ['id', 'title', 'text', 'notifyTime'],
      where: {isDeleted: false, id},
      relations: ['tags']
    });
  }

  /*  update(id: number, updateNoteDto: UpdateNoteDto) {
      return `This action updates a #${id} note`;
    }*/

  remove(id: number) {

    return this.notesRepository.findOne({where: {id}, relations: ['tags']}).then(async (note: Note) => {
        const tagsIds = note.tags ? note.tags.map(tag => tag.id) : [];

        if (tagsIds.length) {
          await this.noteTagsRepo.delete({noteId: id})
            .then(() =>
              tagsIds.forEach(tagId => this.noteTagsRepo.count({where: {tagId}})
                .then((counted) => counted === 0 ? this.tagsRepository.update(tagId, {isUsed: false}) : null)));
        }
        return await this.notesRepository.update(id, {isDeleted: true});
      }
    );

  }
}
