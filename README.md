<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 style="text-align:center">NestJS tasks API</h1>

## Description

An API for managing personal tasks (todos).

## Tech stack

| Name              | Description              |
|-------------------|--------------------------|
| TypeScript        | Language                 |
| NestJS            | Framework                |
| Fastify           | Web framework            |
| Prisma            | ORM                      |
| Keycloak          | Identity provider        |
| Class validator   | Validation               |
| Day.js            | Date handling            |
| ulid              | ID generation            |
| dotenv            | Config handling          |
| OpenAPI           | API specification        |
| OpenAPI generator | OpenAPI client generator |
| Eslint            | Linting                  |
| Prettier          | Code formatter           |
| Vitest            | Test framework           |

## Project setup

Install dependencies:

```bash
$ yarn install
```

Generate Prisma clients and query clients:

```
npm run generate
```

## Compile and run the project

Development:

```shell
yarn run start
```

Watch mode:

```shell
yarn run start:dev
```

Production:

```shell
yarn run start:prod
```

## Run tests

Unit tests:

```shell
yarn run test
```

E2E tests:

```shell
yarn run test:e2e
```

With coverage:

```shell
yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it
runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more
information.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- Visualize your application graph and interact with the NestJS application in real-time
  using [NestJS Devtools](https://devtools.nestjs.com).
