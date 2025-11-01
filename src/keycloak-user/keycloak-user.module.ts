import { Module } from '@nestjs/common';
import { KeycloakUserService } from './keycloak-user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [KeycloakUserService],
  exports: [KeycloakUserService],
  imports: [ConfigModule]
})
export class KeycloakUserModule {}
