import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestationUnitaireDto } from './create-prestation-unitaire.dto';

export class UpdatePrestationUnitaireDto extends PartialType(
  CreatePrestationUnitaireDto,
) {}
