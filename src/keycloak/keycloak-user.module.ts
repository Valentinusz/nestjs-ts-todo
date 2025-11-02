import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KeycloakUserService } from './keycloak-user.service';
import { KeycloakApiService } from '@/keycloak/keycloak-api.service';

@Module({
  providers: [KeycloakUserService, KeycloakApiService],
  exports: [KeycloakUserService],
  imports: [ConfigModule],
})
export class KeycloakUserModule {}
