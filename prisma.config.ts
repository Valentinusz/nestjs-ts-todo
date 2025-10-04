import { resolve } from 'node:path';
import type { PrismaConfig } from 'prisma';
import 'dotenv/config';

export default {
  schema: resolve('./prisma'),
} satisfies PrismaConfig;
