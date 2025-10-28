import { env } from 'node:process';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API for managing tasks (things to do)')
    .setVersion('0.1')
    .addOAuth2({
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl:
            'http://localhost:8080/realms/tasks-realm/protocol/openid-connect/auth',
          tokenUrl:
            'http://localhost:8080/realms/tasks-realm/protocol/openid-connect/token',
          scopes: {},
        },
      },
    })
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(
      app,
      config,
      {
        operationIdFactory: (_, methodKey, version) =>
          `${methodKey}${version ? version.replace(/^./, version[0].toUpperCase()) : ''}`,
      },

    );

  const swaggerPath = 'api';
  const jsonDocumentUrl = `${swaggerPath}-json`;

  SwaggerModule.setup(swaggerPath, app, documentFactory, {
    jsonDocumentUrl,
    // see https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/ for options
    swaggerOptions: {
      persistAuthorization: true,
      displayOperationId: true,
      filter: true,
      urls: [{ name: 'JSON', url: jsonDocumentUrl }],
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
      initOAuth: {
        clientId: 'tasks-backend-swagger',
      },
    },
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  if (env.NODE_ENV !== 'production') {
    const logger = new Logger('Swagger');

    logger.log(`Swagger UI running at http://localhost:${port}/${swaggerPath}`);
  }
}

void bootstrap();
