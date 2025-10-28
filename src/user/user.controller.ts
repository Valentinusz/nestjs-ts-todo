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
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiSecurity,
} from '@nestjs/swagger';
import { ErrorResponseDto } from '@/openapi/error-response.dto';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';
import {
  USER_ID_API_PARAM_OPTIONS,
  USER_NOT_FOUND_API_RESPONSE_OPTIONS,
} from '@/user/user-openapi.constants';
import { UserService } from '@/user/user.service';

@Controller('users')
@ApiSecurity('oauth2')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  @ApiOperation({
    summary: 'Get user by id',
  })
  @ApiParam(USER_ID_API_PARAM_OPTIONS)
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse(USER_NOT_FOUND_API_RESPONSE_OPTIONS)
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
    summary: 'Cancel the ongoing deletion of a user',
  })
  @ApiParam(USER_ID_API_PARAM_OPTIONS)
  @ApiNoContentResponse({
    description: 'Deletion cancelled',
  })
  @ApiNotFoundResponse(USER_NOT_FOUND_API_RESPONSE_OPTIONS)
  @ApiConflictResponse({
    description: 'User is not marked for deletion',
    type: ErrorResponseDto,
  })
  async undeleteUser(@Param('userId') userId: string) {
    await this.userService.markUserAsNotDeleted(userId);
  }

  @Delete(':userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Mark a user for deletion',
  })
  @ApiParam(USER_ID_API_PARAM_OPTIONS)
  @ApiNoContentResponse({
    description: 'User marked for deletion',
  })
  @ApiNotFoundResponse(USER_NOT_FOUND_API_RESPONSE_OPTIONS)
  @ApiConflictResponse({
    description: 'User is already marked for deletion',
    type: ErrorResponseDto,
  })
  async deleteUser(@Param('userId') userId: string) {
    await this.userService.markUserAsDeleted(userId);
  }
}
