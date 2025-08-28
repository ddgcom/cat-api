import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { INestApplication } from '@nestjs/common';

// Variable para mantener la aplicación "caliente" entre invocaciones
let cachedServer;

// Función para inicializar la app NestJS
async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app;
}

// El handler que AWS Lambda invocará
export const handler = async (event, context) => {
  // Si no hemos inicializado la app, lo hacemos.
  // Esto se ejecuta en el "arranque en frío" (cold start).
  if (!cachedServer) {
    const nestApp = await bootstrap();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  // En invocaciones "tibias" (warm starts), reutilizamos la instancia.
  // El adaptador se encarga de traducir el evento de Lambda para Express.
  return cachedServer(event, context);
};