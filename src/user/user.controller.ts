import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';
import { UserService } from '@/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  @ApiOperation({
    summary: 'Get user by id',
  })
  @ApiParam()
  @ApiOkResponse({ type: UserDto })
  async getUser(@Param('userId') userId: string): Promise<UserDto> {
    return this.userService.getUser(userId);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiCreatedResponse({ type: CreateUserResponseDto })
  async createUser(): Promise<CreateUserResponseDto> {
    return this.userService.createUser();
  }

  @Patch(':userId/deleted')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Cancel the ongoing creation of a user',
  })
  @ApiNoContentResponse()
  async undeleteUser(@Param('userId') userId: string) {
    await this.userService.markUserAsNotDeleted(userId);
  }

  @Delete(':userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Mark a user for deletion',
  })
  @ApiNoContentResponse()
  async deleteUser(@Param('userId') userId: string) {
    await this.userService.markUserAsDeleted(userId);
  }
}
