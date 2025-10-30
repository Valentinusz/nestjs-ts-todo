import { Injectable } from '@nestjs/common';
import { Configuration, UsersApi } from '@generated/api/keycloak';

@Injectable()
export class KeycloakUserService {
  private readonly apiClient: UsersApi;

  constructor() {
    const config = new Configuration({
      basePath: 'http://localhost:8080',
      // Add other configuration options
    });

    this.apiClient = new UsersApi(config);
  }

  async getData() {
    return await this.apiClient.adminRealmsRealmUsersGet({
      realm: 'tasks-realm',
      username: 'boda'
    });
  }

}
