import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    exposedHeaders: ['Content-Range'],
  });
  await app.listen(process.env.PORT || config.get('server').port || 3000);
}
bootstrap();
