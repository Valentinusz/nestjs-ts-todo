import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/environment-variables';
import { KeycloakApiService } from '@/keycloak/keycloak-api.service';
import { Configuration, UsersApi } from '@generated/api/keycloak';

@Injectable()
export class KeycloakUserService {
  private readonly apiClient: UsersApi;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly keycloakApiService: KeycloakApiService,
  ) {
    const config = new Configuration({
      basePath: this.configService.get('KEYCLOAK_TASKS_REALM_AUTH_SERVER_URL'),
    });

    this.apiClient = new UsersApi(config);
  }

  async getData() {
    const token = await this.keycloakApiService.getServiceUserToken();

    return await this.apiClient.adminRealmsRealmUsersGet(
      {
        realm: 'tasks-realm',
        username: 'boda',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}
