import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  PolicyEnforcementMode,
  ResourceGuard,
  RoleGuard,
  TokenValidation,
} from 'nest-keycloak-connect';
import { RequestLoggerInterceptor } from '@/interceptors/request-logger.interceptor';
import { KeycloakUserModule } from '@/keycloak-user/keycloak-user.module';
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
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'tasks-realm',
      clientId: 'tasks-backend',
      secret: 'xvvm9isbmYdwJ3ci3j6jGPN600jRHqUn',
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
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
