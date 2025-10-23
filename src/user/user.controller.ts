import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateUserRequestDto } from '@/user/dto/create-user-request.dto';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';

@Controller('users')
export class UserController {
  constructor() {
  }

  @Get(':userId')
  @ApiOperation({
    summary: 'Get user by id'
  })
  @ApiOkResponse({ type: UserDto })
  async getUser(
    @Param('userId') userId: string
  ): Promise<UserDto> {
    return {} as UserDto;
  }

  @Post()
  @ApiCreatedResponse({ type: CreateUserResponseDto })
  async createUser(
    @Body() createUserDto: CreateUserRequestDto
  ): Promise<CreateUserResponseDto> {
    return {} as CreateUserResponseDto;
  }
}
