import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}


}
