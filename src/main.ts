import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: '*',
  })

  await app.listen(3000);
}
bootstrap();
