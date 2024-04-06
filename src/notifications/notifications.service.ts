import {Injectable} from '@nestjs/common';
import {CreateNotificationDto} from './dto/create-notification.dto';
import {UpdateNotificationDto} from './dto/update-notification.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Notification} from "./entities/notification.entity";
import {Repository} from "typeorm";
import * as moment from 'moment';


@Injectable()
export class NotificationsService {

  constructor(@InjectRepository(Notification)
              private notificationRepository: Repository<Notification>
  ) {
  }

  create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = new Notification();

    notification.text = createNotificationDto.text;
    notification.deadline = createNotificationDto.deadline;
    notification.isResolved = false;
    notification.isDeleted = false;

    return this.notificationRepository.save(notification).then(response => {
      delete response.isDeleted;
      response.deadline = this.transformDate(response.deadline);
      return response;
    });
  }

  findAll(): Promise<Notification[]> {
    return this.notificationRepository.find({
      select: ["id", "text", "deadline", "isResolved"],
      where: {isDeleted: false}
    }).then((selected: Notification[]): Notification[] => selected.map((item: Notification): Notification => ({
          ...item,
          deadline: this.transformDate(item.deadline)
        })
      )
    )
  }

  findOne(id: number): Promise<Notification> {
    return this.notificationRepository.findOne({
      select: ["id", "text", "deadline", "isResolved"],
      where: {
        isDeleted: false,
        id
      }
    }).then((found: Notification): Notification => {
      found.deadline = this.transformDate(found.deadline);
      return found;
    });
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    return this.notificationRepository.update(id, updateNotificationDto).then(() => this.findOne(id));
  }

  private transformDate(dirtyDate: string) {
    return moment(dirtyDate).format('YYYY-MM-DD HH:mm');
  }
}
