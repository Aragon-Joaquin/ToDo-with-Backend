import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({ origin: 'http://localhost:5173' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
