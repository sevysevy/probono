import { Module } from '@nestjs/common';
import { BaseCrudService } from './base_crud/base_crud.service';
import { PrismaService } from '../prisma/prisma.service';
@Module({
  providers: [BaseCrudService , PrismaService]
})
export class CoreModule {}
