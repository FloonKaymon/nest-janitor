import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestataireAccountDto } from './create-prestataire-account.dto';

export class UpdatePrestataireAccountDto extends PartialType(
  CreatePrestataireAccountDto,
) {}
