import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.enableCors({ credentials: true, origin: ['https://commits-web.vercel.app', 'http://localhost:3000'], methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' })

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
  SwaggerModule.setup('api/v1/swagger', app, document, {
    customSiteTitle: 'Commit API Docs',
    customfavIcon: 'https://github.com/swagger.png?size=200',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });
   
  await app.listen(process.env.PORT || 3000);
  logger.log('App running on port ' + (process.env.PORT || 3000))
}
bootstrap();
