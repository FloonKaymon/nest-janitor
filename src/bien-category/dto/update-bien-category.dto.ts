import { PartialType } from '@nestjs/mapped-types';
import { CreateBienCategoryDto } from './create-bien-category.dto';

export class UpdateBienCategoryDto extends PartialType(CreateBienCategoryDto) {}
