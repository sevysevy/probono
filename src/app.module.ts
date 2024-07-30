import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SharedModule } from './shared/shared.module';
import { PrismaService } from './prisma/prisma.service';
import { CoreModule } from './core/core.module';
import { UserManagementModule } from './user-management/user-management.module';

/*@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: process.env.ENV==='dev',
      context: ({ req }) => ({ request: req }),
    }),
    //AuthModule,
    SharedModule,
    CoreModule,
    UserManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
