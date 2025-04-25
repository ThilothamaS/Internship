import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { database } from 'db/database.config';
import { drizzle } from 'drizzle-orm/singlestore/driver';

async function bootstrap() {
  const db = database();

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
