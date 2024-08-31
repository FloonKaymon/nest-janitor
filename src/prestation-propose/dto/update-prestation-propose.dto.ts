import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestationProposeDto } from './create-prestation-propose.dto';

export class UpdatePrestationProposeDto extends PartialType(
  CreatePrestationProposeDto,
) {}
