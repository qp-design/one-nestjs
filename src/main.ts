import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './project/project.middleware';
// import { ValidationPipe } from './utils/pipes/validate.pipe';
// import { HttpExceptionFilter } from './http-exception.filter';
import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/',
    {
      dbName: 'test',
    },
  );
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(logger);

  const config = new DocumentBuilder()
    .setTitle('first')
    .setDescription('The first API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.useGlobalPipes(new ValidationPipe())
  // app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}

bootstrap();
