import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { AxiosError } from 'axios';

@Catch(AxiosError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: AxiosError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    
    const status = exception.response?.status || 500;
    const message = exception.response?.statusText || 'Internal Server Error';
    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}