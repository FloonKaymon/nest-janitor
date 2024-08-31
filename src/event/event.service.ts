import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { Association } from 'src/association/entities/association.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const association = await this.associationRepository.findOne({
      where: { name: createEventDto.associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne({
      where: {
        id: createEventDto.createdBy,
        associationName: createEventDto.associationName,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.eventRepository.save(createEventDto);
  }
  async findAllByAssociation(associationName: string): Promise<Event[]> {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const events = await this.eventRepository.find({
      where: { associationName: associationName },
    });
    if (!events) {
      throw new HttpException('Events not found', HttpStatus.NOT_FOUND);
    }
    return events;
  }

  async findOne(id: number, associationName: string): Promise<Event> {
    const association = await this.associationRepository.findOne({
      where: { name: associationName },
    });
    if (!association) {
      throw new HttpException('Association not found', HttpStatus.NOT_FOUND);
    }
    const event = await this.eventRepository.findOne({ where: { id: id } });
    if (!event) {
      throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.findOne({ where: { id: id } });
    if (!event) {
      throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }
    return this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOne({ where: { id: id } });
    if (!event) {
      throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }
    return this.eventRepository.delete(id);
  }
}
