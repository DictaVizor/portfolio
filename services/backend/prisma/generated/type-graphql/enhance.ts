import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  RefreshToken: crudResolvers.RefreshTokenCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  RefreshToken: {
    refreshToken: actionResolvers.FindUniqueRefreshTokenResolver,
    findFirstRefreshToken: actionResolvers.FindFirstRefreshTokenResolver,
    refreshTokens: actionResolvers.FindManyRefreshTokenResolver,
    createRefreshToken: actionResolvers.CreateRefreshTokenResolver,
    createManyRefreshToken: actionResolvers.CreateManyRefreshTokenResolver,
    deleteRefreshToken: actionResolvers.DeleteRefreshTokenResolver,
    updateRefreshToken: actionResolvers.UpdateRefreshTokenResolver,
    deleteManyRefreshToken: actionResolvers.DeleteManyRefreshTokenResolver,
    updateManyRefreshToken: actionResolvers.UpdateManyRefreshTokenResolver,
    upsertRefreshToken: actionResolvers.UpsertRefreshTokenResolver,
    aggregateRefreshToken: actionResolvers.AggregateRefreshTokenResolver,
    groupByRefreshToken: actionResolvers.GroupByRefreshTokenResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  RefreshToken: ["refreshToken", "findFirstRefreshToken", "refreshTokens", "createRefreshToken", "createManyRefreshToken", "deleteRefreshToken", "updateRefreshToken", "deleteManyRefreshToken", "updateManyRefreshToken", "upsertRefreshToken", "aggregateRefreshToken", "groupByRefreshToken"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRefreshTokenArgs: ["where"],
  FindFirstRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRefreshTokenArgs: ["data"],
  CreateManyRefreshTokenArgs: ["data", "skipDuplicates"],
  DeleteRefreshTokenArgs: ["where"],
  UpdateRefreshTokenArgs: ["data", "where"],
  DeleteManyRefreshTokenArgs: ["where"],
  UpdateManyRefreshTokenArgs: ["data", "where"],
  UpsertRefreshTokenArgs: ["where", "create", "update"],
  AggregateRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  RefreshToken: relationResolvers.RefreshTokenRelationsResolver
};
const relationResolversInfo = {
  User: ["tokens"],
  RefreshToken: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshToken: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRefreshToken: ["_count", "_avg", "_sum", "_min", "_max"],
  RefreshTokenGroupBy: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["tokens"],
  UserCountAggregate: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "email", "firstName", "lastName", "password", "role"],
  UserMaxAggregate: ["id", "createdAt", "email", "firstName", "lastName", "password", "role"],
  RefreshTokenCountAggregate: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "_all"],
  RefreshTokenAvgAggregate: ["id", "userId"],
  RefreshTokenSumAggregate: ["id", "userId"],
  RefreshTokenMinAggregate: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenMaxAggregate: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  UserOrderByWithRelationInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshTokenWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "user", "userId"],
  RefreshTokenOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "user", "userId"],
  RefreshTokenWhereUniqueInput: ["id", "token"],
  RefreshTokenOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  RefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  UserCreateInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  UserUpdateInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  UserCreateManyInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  UserUpdateManyMutationInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshTokenCreateInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration", "user"],
  RefreshTokenUpdateInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration", "user"],
  RefreshTokenCreateManyInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenUpdateManyMutationInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  JsonNullableFilter: ["equals", "not"],
  RefreshTokenListRelationFilter: ["every", "some", "none"],
  RefreshTokenOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumTokenTypeFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  RefreshTokenCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenAvgOrderByAggregateInput: ["id", "userId"],
  RefreshTokenMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenSumOrderByAggregateInput: ["id", "userId"],
  EnumTokenTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  RefreshTokenCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  RefreshTokenUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  EnumTokenTypeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutTokensInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonNullableFilter: ["equals", "not"],
  NestedEnumTokenTypeFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumTokenTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  RefreshTokenCreateWithoutUserInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  RefreshTokenCreateOrConnectWithoutUserInput: ["where", "create"],
  RefreshTokenCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RefreshTokenUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RefreshTokenUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RefreshTokenUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RefreshTokenScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  UserCreateWithoutTokensInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  UserCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserUpsertWithoutTokensInput: ["update", "create"],
  UserUpdateWithoutTokensInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshTokenCreateManyUserInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  RefreshTokenUpdateWithoutUserInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

