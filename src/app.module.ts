import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TagsModule} from "./tags/tags.module";
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {Tag} from "./tags/entities/tag.entity";
import {NotificationsModule} from './notifications/notifications.module';
import {Notification} from "./notifications/entities/notification.entity";
import {NotesModule} from './notes/notes.module';
import {Note} from "./notes/entities/note.entity";
import {NoteTagsTag} from "./many-to-many-tables/note-tag.entity";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';


export const connectionSettings: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'paradox_test_db',
  entities: [Tag, Notification, Note, NoteTagsTag],
  synchronize: true
}

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    TagsModule,
    NotificationsModule,
    TypeOrmModule.forRoot(connectionSettings),
    NotesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
  }
}
