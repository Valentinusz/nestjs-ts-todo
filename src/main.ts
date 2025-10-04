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
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('0.1')
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      operationIdFactory: (_, methodKey, version) =>
        `${methodKey}${version ? version.replace(/^./, version[0].toUpperCase()) : ''}`,
    });

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
