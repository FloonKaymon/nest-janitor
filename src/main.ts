import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dataSource from './database/database';

async function bootstrap() {
  try {
    await dataSource.initialize();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
