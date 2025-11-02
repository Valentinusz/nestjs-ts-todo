import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { RequestLoggerInterceptor } from '@/interceptors/request-logger.interceptor';
import { KeycloakConfigService } from '@/keycloak/keycloak-config.service';
import { KeycloakUserModule } from '@/keycloak/keycloak-user.module';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskModule } from '@/task/task.module';
import { TaskCollectionModule } from '@/task-collection/task-collection.module';
import { UserModule } from '@/user/user.module';
import { UserTaskModule } from '@/user-task/user-task.module';
import { UserTaskCollectionModule } from '@/user-task-collection/user-task-collection.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    TaskModule,
    TaskCollectionModule,
    UserModule,
    UserTaskModule,
    UserTaskCollectionModule,
    KeycloakConnectModule.registerAsync({
      useClass: KeycloakConfigService,
      imports: [ConfigModule],
    }),
    KeycloakUserModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: RequestLoggerInterceptor },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
