import { Module } from '@nestjs/common';
import { KeycloakUserModule } from '@/keycloak/keycloak-user.module';
import { PrismaModule } from '@/persistence/prisma.module';
import { UserExistenceService } from '@/user/user-existence.service';
import { UserController } from '@/user/user.controller';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserExistenceService],
  imports: [PrismaModule, KeycloakUserModule],
  exports: [UserExistenceService]
})
export class UserModule {

}
