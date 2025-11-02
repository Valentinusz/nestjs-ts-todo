import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { EnvironmentVariables } from '@/environment-variables';

@Injectable()
export class KeycloakApiService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  async getServiceUserToken(): Promise<string> {
    const authServer = this.configService.get(
      'KEYCLOAK_TASKS_REALM_AUTH_SERVER_URL',
    );
    const realmName = this.configService.get('KEYCLOAK_TASKS_REALM_NAME');

    const params = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: this.configService.get('KEYCLOAK_TASKS_REALM_CLIENT_ID', ''),
      client_secret: this.configService.get(
        'KEYCLOAK_TASKS_REALM_CLIENT_SECRET',
        '',
      ),
    });

    const response = await axios.post<{ access_token: string }>(
      `${authServer}/realms/${realmName}/protocol/openid-connect/token`,
      params,
    );

    return response.data.access_token;
  }
}
