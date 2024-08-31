import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  title: string;

  description: string;

  privated: boolean;

  date: Date;
}
