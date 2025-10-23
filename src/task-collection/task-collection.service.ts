import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';

@Injectable()
export class TaskCollectionService {
  constructor(private readonly prismaService: PrismaService) {}


}
