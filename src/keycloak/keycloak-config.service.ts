import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';
import { EnvironmentVariables } from '@/EnvironmentVariables';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: this.configService.get(
        'KEYCLOAK_TASKS_REALM_AUTH_SERVER_URL',
      ),
      realm: this.configService.get('KEYCLOAK_TASKS_REALM_NAME'),
      clientId: this.configService.get('KEYCLOAK_TASKS_REALM_CLIENT_ID'),
      secret:
        this.configService.get('KEYCLOAK_TASKS_REALM_CLIENT_SECRET') ?? '',
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    };
  }
}
