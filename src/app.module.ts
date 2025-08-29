import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // 1. Módulo de Configuración para leer variables .env de forma global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. Módulos de las funcionalidades de la aplicación
    CatsModule,
    ImagesModule,
    UsersModule, // UsersModule ahora utiliza Prisma internamente
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}