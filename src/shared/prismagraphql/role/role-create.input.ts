import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { PermissionCreateNestedManyWithoutRoleInput } from '../permission/permission-create-nested-many-without-role.input';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleTypes, {nullable:false})
    roleType!: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutRoleInput;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserCreateNestedManyWithoutRoleInput;
}
