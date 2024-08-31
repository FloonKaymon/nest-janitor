import { PartialType } from '@nestjs/mapped-types';
import { CreateAgDto } from './create-ag.dto';

export class UpdateAgDto extends PartialType(CreateAgDto) {}
