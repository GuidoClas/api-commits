import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { customCssUrl, customJs, customfavIcon } from './infrastructure/swagger/constants';
import { corsConfig } from './infrastructure/cors/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.enableCors(corsConfig);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {enableImplicitConversion: true},
      whitelist: true,
    })
  );

  //Swagger integration
  const config = new DocumentBuilder()
    .setTitle('Commits-API')
    .setDescription('Github Commit API wrapper')
    .setVersion('1.0')
    .addTag('Commits')
    .addTag('Branches')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document, {
    customSiteTitle: 'Commit API Docs',
    customfavIcon: customfavIcon,
    customJs: customJs,
    customCssUrl: customCssUrl,
  });
   
  await app.listen(process.env.PORT || 3000);
  logger.log('App running on port ' + (process.env.PORT || 3000))
}
bootstrap();
