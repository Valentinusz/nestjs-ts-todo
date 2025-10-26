import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RequestLoggerInterceptor } from '@/interceptors/request-logger.interceptor';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskModule } from '@/task/task.module';
import { TaskCollectionModule } from '@/task-collection/task-collection.module';
import { UserModule } from '@/user/user.module';
import { UserTaskModule } from '@/user-task/user-task.module';
import { UserTaskCollectionModule } from '@/user-task-collection/user-task-collection.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    TaskModule,
    TaskCollectionModule,
    UserModule,
    UserTaskModule,
    UserTaskCollectionModule,
    AuthModule,
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: RequestLoggerInterceptor }],
})
export class AppModule {}
