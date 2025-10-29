import { Module } from '@nestjs/common';
import { KeycloakUserService } from './keycloak-user.service';

@Module({
  providers: [KeycloakUserService],
  exports: [KeycloakUserService],
})
export class KeycloakUserModule {}
