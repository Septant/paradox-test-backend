import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TagsService} from './tags.service';
import {CreateTagDto} from './dto/create-tag.dto';
import {UpdateTagDto} from './dto/update-tag.dto';

@Controller('api/tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {
  }

  @Post('create')
  create(@Body() createTagDto: CreateTagDto, ) {
    return this.tagsService.create(createTagDto);

  }

  @Get('all')
  findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
