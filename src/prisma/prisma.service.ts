import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    // Conecta a la base de datos cuando el módulo se inicie
    await this.$connect();
  }

  async onModuleDestroy() {
    // Desconecta de la base de datos cuando la aplicación se cierre
    await this.$disconnect();
  }
}