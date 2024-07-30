import { Module } from '@nestjs/common';
import { UserService } from './users/users.service';
import { UserResolver } from './users/users.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService]
})
export class UserManagementModule {}
