import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { EnvironmentVariables } from '@/EnvironmentVariables';
import { Configuration, UsersApi } from '@generated/api/keycloak';

@Injectable()
export class KeycloakUserService {
  private readonly apiClient: UsersApi;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {
    const config = new Configuration({
      basePath: this.configService.get('KEYCLOAK_TASKS_REALM_AUTH_SERVER_URL'),
      // Add other configuration options
    });

    this.apiClient = new UsersApi(config);
  }

  async getServiceUserToken(): Promise<string> {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append(
      'client_id',
      this.configService.get('KEYCLOAK_TASKS_REALM_CLIENT_ID', ''),
    );
    params.append(
      'client_secret',
      this.configService.get('KEYCLOAK_TASKS_REALM_CLIENT_SECRET', ''),
    );

    const authServer = this.configService.get(
      'KEYCLOAK_TASKS_REALM_AUTH_SERVER_URL',
    );
    const realmName = this.configService.get('KEYCLOAK_TASKS_REALM_NAME');

    const response = await axios.post(
      `${authServer}/realms/${realmName}/protocol/openid-connect/token`,
      params,
    );

    return response.data.access_token;
  }

  async getData() {
    const token = await this.getServiceUserToken();

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
