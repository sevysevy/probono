import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { PermissionUncheckedCreateNestedManyWithoutRoleInput } from '../permission/permission-unchecked-create-nested-many-without-role.input';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleTypes, {nullable:false})
    roleType!: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
