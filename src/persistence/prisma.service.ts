import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { monotonicFactory, ULID } from 'ulid';
import { PrismaClient, Prisma } from '../../generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    'query' | 'info' | 'warn' | 'error'
  >
  implements OnModuleInit
{
  private readonly ulid = monotonicFactory();

  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });

    this.$on('query', (e) => {
      this.logger.log('Query: ' + e.query);
      this.logger.log('Params: ' + e.params);
      this.logger.log('Duration: ' + e.duration + 'ms');
    });

    this.$on('info', (e) => {
      this.logger.log(e.target, e.message);
    });

    this.$on('warn', (e) => {
      this.logger.warn(e.target, e.message);
    });

    this.$on('error', (e) => {
      this.logger.error(e.target, e.message);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  getUlid(): ULID {
    return this.ulid();
  }
}
