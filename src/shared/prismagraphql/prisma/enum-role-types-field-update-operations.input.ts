import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';

@InputType()
export class EnumRoleTypesFieldUpdateOperationsInput {

    @Field(() => RoleTypes, {nullable:true})
    set?: keyof typeof RoleTypes;
}
