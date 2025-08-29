import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importa PrismaModule

@Module({
  imports: [PrismaModule], // <-- Añádelo aquí
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}