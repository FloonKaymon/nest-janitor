import { PartialType } from '@nestjs/mapped-types';
import { CreateStandardAccountDto } from './create-standard-account.dto';

export class UpdateStandardAccountDto extends PartialType(
  CreateStandardAccountDto,
) {}
