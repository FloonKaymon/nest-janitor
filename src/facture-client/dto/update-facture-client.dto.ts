import { PartialType } from '@nestjs/mapped-types';
import { CreateFactureClientDto } from './create-facture-client.dto';

export class UpdateFactureClientDto extends PartialType(
  CreateFactureClientDto,
) {}
