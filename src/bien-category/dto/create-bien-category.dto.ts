import { IsNotEmpty } from 'class-validator';

export class CreateBienCategoryDto {
  @IsNotEmpty()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
