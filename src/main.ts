import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dataSource from './database/database';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  try {
    await dataSource.initialize();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
