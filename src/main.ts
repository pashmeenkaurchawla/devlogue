import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import 'dotenv/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);
  console.log(`App started successfully http://localhost:${PORT}`);
}
await bootstrap();
