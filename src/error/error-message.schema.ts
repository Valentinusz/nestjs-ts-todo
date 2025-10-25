import { ApiProperty } from '@nestjs/swagger';

export class ErrorMessageSchema {
  @ApiProperty({
    description: 'Detailed error message',
  })
  message: string;

  @ApiProperty({
    description: 'Short error message',
  })
  error: string;

  @ApiProperty({
    description: 'HTTP status code',
  })
  statusCode: number;
}
