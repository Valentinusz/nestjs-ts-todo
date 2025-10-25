import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import type { Observable } from 'rxjs';

export class RequestLoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const http = context.switchToHttp();

    const controller = context.getClass().name;
    const handler = context.getHandler().name;
    const { method, url } = http.getRequest<Request>();

    const beforeMsg = `${controller}.${handler} -> ${method} ${url}`;
    this.logger.log(beforeMsg);

    return next.handle();
  }
}
