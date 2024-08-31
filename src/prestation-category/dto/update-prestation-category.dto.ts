import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestationCategoryDto } from './create-prestation-category.dto';

export class UpdatePrestationCategoryDto extends PartialType(
  CreatePrestationCategoryDto,
) {}
