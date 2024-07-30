import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { BaseCrudService } from "../../core/base_crud/base_crud.service";
import {
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
  User,
  UserAggregateArgs,
  UserGroupByArgs,
} from "../../shared/prismagraphql/user";

@Injectable()
export class UserService extends BaseCrudService<
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupByArgs,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}