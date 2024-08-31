import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('association/:associationName/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(
    @Param('associationName') associationName: string,
    @Body() createEventDto: CreateEventDto,
  ) {
    createEventDto.associationName = associationName;
    return this.eventService.create(createEventDto);
  }

  @Get()
  findAll(@Param('associationName') associationName: string) {
    return this.eventService.findAllByAssociation(associationName);
  }

  @Get(':associationName')
  findOne(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
  ) {
    return this.eventService.findOne(+id, associationName);
  }

  @Patch(':associationName')
  update(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':associationName')
  remove(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
  ) {
    return this.eventService.remove(+id);
  }
}
