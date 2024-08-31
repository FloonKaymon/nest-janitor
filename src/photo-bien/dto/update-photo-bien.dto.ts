import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoBienDto } from './create-photo-bien.dto';

export class UpdatePhotoBienDto extends PartialType(CreatePhotoBienDto) {}
