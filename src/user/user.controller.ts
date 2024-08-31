import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('association/:associationName/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Param('associationName') associationName: string,
    @Body() createUserDto: CreateUserDto,
  ) {
    createUserDto.associationName = associationName;
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Param('associationName') associationName: string) {
    return this.userService.findAllByAssociation(associationName);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
  ) {
    return this.userService.findOne(+id, associationName);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Param('associationName') associationName: string,
  ) {
    return this.userService.remove(+id, associationName);
  }
}
