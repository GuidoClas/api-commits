import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {enableImplicitConversion: true},
      whitelist: true,
    })
  );
   
  await app.listen(process.env.PORT || 3000);
  logger.log('App running on port ' + (process.env.PORT || 3000))
}
bootstrap();
