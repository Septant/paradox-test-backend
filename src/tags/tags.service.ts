import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Tag} from "./entities/tag.entity";
import {Repository} from "typeorm";

@Injectable()
export class TagsService {

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>
  ) {
  }
  create(createTagDto: CreateTagDto) {
    const tag: Tag = new Tag();

    tag.value = createTagDto.value;
    tag.isUsed = false;
    tag.isDeleted = false;

    return this.tagRepository.save(tag).then(tag => {
      delete tag.isDeleted;
      return tag;
    });
  }

  findAll() {
    return this.tagRepository.find({
      select: ['id', 'value', 'isUsed'],
      where: {
        isDeleted: false
      }
    });
  }

  findOne(id: number) {
    return this.tagRepository.findOne({
      select: ["id", "value", "isUsed"],
      where: {
        isDeleted: false,
        id
      }
    });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id , updateTagDto).then(() => this.findOne(id));
  }

  remove(id: number) {
    return this.tagRepository.update(id, {isDeleted: true});
  }
}
