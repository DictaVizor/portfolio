import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  RefreshToken: crudResolvers.RefreshTokenCrudResolver,
  Doctor: crudResolvers.DoctorCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Task: crudResolvers.TaskCrudResolver,
  Appointment: crudResolvers.AppointmentCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  RefreshToken: {
    aggregateRefreshToken: actionResolvers.AggregateRefreshTokenResolver,
    createManyRefreshToken: actionResolvers.CreateManyRefreshTokenResolver,
    createOneRefreshToken: actionResolvers.CreateOneRefreshTokenResolver,
    deleteManyRefreshToken: actionResolvers.DeleteManyRefreshTokenResolver,
    deleteOneRefreshToken: actionResolvers.DeleteOneRefreshTokenResolver,
    findFirstRefreshToken: actionResolvers.FindFirstRefreshTokenResolver,
    findFirstRefreshTokenOrThrow: actionResolvers.FindFirstRefreshTokenOrThrowResolver,
    refreshTokens: actionResolvers.FindManyRefreshTokenResolver,
    refreshToken: actionResolvers.FindUniqueRefreshTokenResolver,
    getRefreshToken: actionResolvers.FindUniqueRefreshTokenOrThrowResolver,
    groupByRefreshToken: actionResolvers.GroupByRefreshTokenResolver,
    updateManyRefreshToken: actionResolvers.UpdateManyRefreshTokenResolver,
    updateOneRefreshToken: actionResolvers.UpdateOneRefreshTokenResolver,
    upsertOneRefreshToken: actionResolvers.UpsertOneRefreshTokenResolver
  },
  Doctor: {
    aggregateDoctor: actionResolvers.AggregateDoctorResolver,
    createManyDoctor: actionResolvers.CreateManyDoctorResolver,
    createOneDoctor: actionResolvers.CreateOneDoctorResolver,
    deleteManyDoctor: actionResolvers.DeleteManyDoctorResolver,
    deleteOneDoctor: actionResolvers.DeleteOneDoctorResolver,
    findFirstDoctor: actionResolvers.FindFirstDoctorResolver,
    findFirstDoctorOrThrow: actionResolvers.FindFirstDoctorOrThrowResolver,
    doctors: actionResolvers.FindManyDoctorResolver,
    doctor: actionResolvers.FindUniqueDoctorResolver,
    getDoctor: actionResolvers.FindUniqueDoctorOrThrowResolver,
    groupByDoctor: actionResolvers.GroupByDoctorResolver,
    updateManyDoctor: actionResolvers.UpdateManyDoctorResolver,
    updateOneDoctor: actionResolvers.UpdateOneDoctorResolver,
    upsertOneDoctor: actionResolvers.UpsertOneDoctorResolver
  },
  Patient: {
    aggregatePatient: actionResolvers.AggregatePatientResolver,
    createManyPatient: actionResolvers.CreateManyPatientResolver,
    createOnePatient: actionResolvers.CreateOnePatientResolver,
    deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
    deleteOnePatient: actionResolvers.DeleteOnePatientResolver,
    findFirstPatient: actionResolvers.FindFirstPatientResolver,
    findFirstPatientOrThrow: actionResolvers.FindFirstPatientOrThrowResolver,
    patients: actionResolvers.FindManyPatientResolver,
    patient: actionResolvers.FindUniquePatientResolver,
    getPatient: actionResolvers.FindUniquePatientOrThrowResolver,
    groupByPatient: actionResolvers.GroupByPatientResolver,
    updateManyPatient: actionResolvers.UpdateManyPatientResolver,
    updateOnePatient: actionResolvers.UpdateOnePatientResolver,
    upsertOnePatient: actionResolvers.UpsertOnePatientResolver
  },
  Task: {
    aggregateTask: actionResolvers.AggregateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    createOneTask: actionResolvers.CreateOneTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    deleteOneTask: actionResolvers.DeleteOneTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    task: actionResolvers.FindUniqueTaskResolver,
    getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
    groupByTask: actionResolvers.GroupByTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    updateOneTask: actionResolvers.UpdateOneTaskResolver,
    upsertOneTask: actionResolvers.UpsertOneTaskResolver
  },
  Appointment: {
    aggregateAppointment: actionResolvers.AggregateAppointmentResolver,
    createManyAppointment: actionResolvers.CreateManyAppointmentResolver,
    createOneAppointment: actionResolvers.CreateOneAppointmentResolver,
    deleteManyAppointment: actionResolvers.DeleteManyAppointmentResolver,
    deleteOneAppointment: actionResolvers.DeleteOneAppointmentResolver,
    findFirstAppointment: actionResolvers.FindFirstAppointmentResolver,
    findFirstAppointmentOrThrow: actionResolvers.FindFirstAppointmentOrThrowResolver,
    appointments: actionResolvers.FindManyAppointmentResolver,
    appointment: actionResolvers.FindUniqueAppointmentResolver,
    getAppointment: actionResolvers.FindUniqueAppointmentOrThrowResolver,
    groupByAppointment: actionResolvers.GroupByAppointmentResolver,
    updateManyAppointment: actionResolvers.UpdateManyAppointmentResolver,
    updateOneAppointment: actionResolvers.UpdateOneAppointmentResolver,
    upsertOneAppointment: actionResolvers.UpsertOneAppointmentResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  RefreshToken: ["aggregateRefreshToken", "createManyRefreshToken", "createOneRefreshToken", "deleteManyRefreshToken", "deleteOneRefreshToken", "findFirstRefreshToken", "findFirstRefreshTokenOrThrow", "refreshTokens", "refreshToken", "getRefreshToken", "groupByRefreshToken", "updateManyRefreshToken", "updateOneRefreshToken", "upsertOneRefreshToken"],
  Doctor: ["aggregateDoctor", "createManyDoctor", "createOneDoctor", "deleteManyDoctor", "deleteOneDoctor", "findFirstDoctor", "findFirstDoctorOrThrow", "doctors", "doctor", "getDoctor", "groupByDoctor", "updateManyDoctor", "updateOneDoctor", "upsertOneDoctor"],
  Patient: ["aggregatePatient", "createManyPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
  Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"],
  Appointment: ["aggregateAppointment", "createManyAppointment", "createOneAppointment", "deleteManyAppointment", "deleteOneAppointment", "findFirstAppointment", "findFirstAppointmentOrThrow", "appointments", "appointment", "getAppointment", "groupByAppointment", "updateManyAppointment", "updateOneAppointment", "upsertOneAppointment"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRefreshTokenArgs: ["data", "skipDuplicates"],
  CreateOneRefreshTokenArgs: ["data"],
  DeleteManyRefreshTokenArgs: ["where"],
  DeleteOneRefreshTokenArgs: ["where"],
  FindFirstRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRefreshTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRefreshTokenArgs: ["where"],
  FindUniqueRefreshTokenOrThrowArgs: ["where"],
  GroupByRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRefreshTokenArgs: ["data", "where"],
  UpdateOneRefreshTokenArgs: ["data", "where"],
  UpsertOneRefreshTokenArgs: ["where", "create", "update"],
  AggregateDoctorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDoctorArgs: ["data", "skipDuplicates"],
  CreateOneDoctorArgs: ["data"],
  DeleteManyDoctorArgs: ["where"],
  DeleteOneDoctorArgs: ["where"],
  FindFirstDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstDoctorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDoctorArgs: ["where"],
  FindUniqueDoctorOrThrowArgs: ["where"],
  GroupByDoctorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDoctorArgs: ["data", "where"],
  UpdateOneDoctorArgs: ["data", "where"],
  UpsertOneDoctorArgs: ["where", "create", "update"],
  AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPatientArgs: ["data", "skipDuplicates"],
  CreateOnePatientArgs: ["data"],
  DeleteManyPatientArgs: ["where"],
  DeleteOnePatientArgs: ["where"],
  FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPatientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePatientArgs: ["where"],
  FindUniquePatientOrThrowArgs: ["where"],
  GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPatientArgs: ["data", "where"],
  UpdateOnePatientArgs: ["data", "where"],
  UpsertOnePatientArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  CreateOneTaskArgs: ["data"],
  DeleteManyTaskArgs: ["where"],
  DeleteOneTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTaskArgs: ["where"],
  FindUniqueTaskOrThrowArgs: ["where"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTaskArgs: ["data", "where"],
  UpdateOneTaskArgs: ["data", "where"],
  UpsertOneTaskArgs: ["where", "create", "update"],
  AggregateAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAppointmentArgs: ["data", "skipDuplicates"],
  CreateOneAppointmentArgs: ["data"],
  DeleteManyAppointmentArgs: ["where"],
  DeleteOneAppointmentArgs: ["where"],
  FindFirstAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAppointmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAppointmentArgs: ["where"],
  FindUniqueAppointmentOrThrowArgs: ["where"],
  GroupByAppointmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAppointmentArgs: ["data", "where"],
  UpdateOneAppointmentArgs: ["data", "where"],
  UpsertOneAppointmentArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

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
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
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
  RefreshToken: relationResolvers.RefreshTokenRelationsResolver,
  Doctor: relationResolvers.DoctorRelationsResolver,
  Patient: relationResolvers.PatientRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver,
  Appointment: relationResolvers.AppointmentRelationsResolver
};
const relationResolversInfo = {
  User: ["tokens", "Doctor"],
  RefreshToken: ["user"],
  Doctor: ["user", "patients", "tasks", "appointments"],
  Patient: ["doctor", "appointments"],
  Task: ["doctor", "appointment"],
  Appointment: ["doctor", "patient", "task"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

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
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

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
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshToken: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  Doctor: ["id", "specialty", "userId"],
  Patient: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  Task: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  Appointment: ["id", "doctorId", "patientId", "taskId"]
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
  AggregateDoctor: ["_count", "_avg", "_sum", "_min", "_max"],
  DoctorGroupBy: ["id", "specialty", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePatient: ["_count", "_avg", "_sum", "_min", "_max"],
  PatientGroupBy: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskGroupBy: ["id", "title", "description", "doctorId", "startDate", "endDate", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
  AppointmentGroupBy: ["id", "doctorId", "patientId", "taskId", "_count", "_avg", "_sum", "_min", "_max"],
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
  RefreshTokenMaxAggregate: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  DoctorCount: ["patients", "tasks", "appointments"],
  DoctorCountAggregate: ["id", "specialty", "userId", "_all"],
  DoctorAvgAggregate: ["id", "userId"],
  DoctorSumAggregate: ["id", "userId"],
  DoctorMinAggregate: ["id", "specialty", "userId"],
  DoctorMaxAggregate: ["id", "specialty", "userId"],
  PatientCount: ["appointments"],
  PatientCountAggregate: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber", "_all"],
  PatientAvgAggregate: ["id", "age", "doctorId"],
  PatientSumAggregate: ["id", "age", "doctorId"],
  PatientMinAggregate: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  PatientMaxAggregate: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  TaskCountAggregate: ["id", "title", "description", "doctorId", "startDate", "endDate", "_all"],
  TaskAvgAggregate: ["id", "doctorId"],
  TaskSumAggregate: ["id", "doctorId"],
  TaskMinAggregate: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  TaskMaxAggregate: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  AppointmentCountAggregate: ["id", "doctorId", "patientId", "taskId", "_all"],
  AppointmentAvgAggregate: ["id", "doctorId", "patientId", "taskId"],
  AppointmentSumAggregate: ["id", "doctorId", "patientId", "taskId"],
  AppointmentMinAggregate: ["id", "doctorId", "patientId", "taskId"],
  AppointmentMaxAggregate: ["id", "doctorId", "patientId", "taskId"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens", "Doctor"],
  UserOrderByWithRelationInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens", "Doctor"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshTokenWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "user"],
  RefreshTokenOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "user"],
  RefreshTokenWhereUniqueInput: ["id", "token"],
  RefreshTokenOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  RefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  DoctorWhereInput: ["AND", "OR", "NOT", "id", "specialty", "userId", "user", "patients", "tasks", "appointments"],
  DoctorOrderByWithRelationInput: ["id", "specialty", "userId", "user", "patients", "tasks", "appointments"],
  DoctorWhereUniqueInput: ["id", "userId"],
  DoctorOrderByWithAggregationInput: ["id", "specialty", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  DoctorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "specialty", "userId"],
  PatientWhereInput: ["AND", "OR", "NOT", "id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber", "doctor", "appointments"],
  PatientOrderByWithRelationInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber", "doctor", "appointments"],
  PatientWhereUniqueInput: ["id"],
  PatientOrderByWithAggregationInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber", "_count", "_avg", "_max", "_min", "_sum"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "doctorId", "startDate", "endDate", "doctor", "appointment"],
  TaskOrderByWithRelationInput: ["id", "title", "description", "doctorId", "startDate", "endDate", "doctor", "appointment"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "title", "description", "doctorId", "startDate", "endDate", "_count", "_avg", "_max", "_min", "_sum"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "doctorId", "startDate", "endDate"],
  AppointmentWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "taskId", "doctor", "patient", "task"],
  AppointmentOrderByWithRelationInput: ["id", "doctorId", "patientId", "taskId", "doctor", "patient", "task"],
  AppointmentWhereUniqueInput: ["id", "taskId"],
  AppointmentOrderByWithAggregationInput: ["id", "doctorId", "patientId", "taskId", "_count", "_avg", "_max", "_min", "_sum"],
  AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "taskId"],
  UserCreateInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens", "Doctor"],
  UserUpdateInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens", "Doctor"],
  UserCreateManyInput: ["id", "createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  UserUpdateManyMutationInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social"],
  RefreshTokenCreateInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration", "user"],
  RefreshTokenUpdateInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration", "user"],
  RefreshTokenCreateManyInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  RefreshTokenUpdateManyMutationInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  DoctorCreateInput: ["specialty", "user", "patients", "tasks", "appointments"],
  DoctorUpdateInput: ["specialty", "user", "patients", "tasks", "appointments"],
  DoctorCreateManyInput: ["id", "specialty", "userId"],
  DoctorUpdateManyMutationInput: ["specialty"],
  PatientCreateInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "doctor", "appointments"],
  PatientUpdateInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "doctor", "appointments"],
  PatientCreateManyInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  PatientUpdateManyMutationInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber"],
  TaskCreateInput: ["title", "description", "startDate", "endDate", "doctor", "appointment"],
  TaskUpdateInput: ["title", "description", "startDate", "endDate", "doctor", "appointment"],
  TaskCreateManyInput: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  TaskUpdateManyMutationInput: ["title", "description", "startDate", "endDate"],
  AppointmentCreateInput: ["doctor", "patient", "task"],
  AppointmentUpdateInput: ["doctor", "patient", "task"],
  AppointmentCreateManyInput: ["id", "doctorId", "patientId", "taskId"],
  AppointmentUpdateManyMutationInput: [],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  JsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  RefreshTokenListRelationFilter: ["every", "some", "none"],
  DoctorRelationFilter: ["is", "isNot"],
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
  JsonNullableWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
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
  PatientListRelationFilter: ["every", "some", "none"],
  TaskListRelationFilter: ["every", "some", "none"],
  AppointmentListRelationFilter: ["every", "some", "none"],
  PatientOrderByRelationAggregateInput: ["_count"],
  TaskOrderByRelationAggregateInput: ["_count"],
  AppointmentOrderByRelationAggregateInput: ["_count"],
  DoctorCountOrderByAggregateInput: ["id", "specialty", "userId"],
  DoctorAvgOrderByAggregateInput: ["id", "userId"],
  DoctorMaxOrderByAggregateInput: ["id", "specialty", "userId"],
  DoctorMinOrderByAggregateInput: ["id", "specialty", "userId"],
  DoctorSumOrderByAggregateInput: ["id", "userId"],
  EnumPatientStatusFilter: ["equals", "in", "notIn", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumGenderFilter: ["equals", "in", "notIn", "not"],
  PatientCountOrderByAggregateInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  PatientAvgOrderByAggregateInput: ["id", "age", "doctorId"],
  PatientMaxOrderByAggregateInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  PatientMinOrderByAggregateInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  PatientSumOrderByAggregateInput: ["id", "age", "doctorId"],
  EnumPatientStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  AppointmentRelationFilter: ["is", "isNot"],
  TaskCountOrderByAggregateInput: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  TaskAvgOrderByAggregateInput: ["id", "doctorId"],
  TaskMaxOrderByAggregateInput: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  TaskMinOrderByAggregateInput: ["id", "title", "description", "doctorId", "startDate", "endDate"],
  TaskSumOrderByAggregateInput: ["id", "doctorId"],
  PatientRelationFilter: ["is", "isNot"],
  TaskRelationFilter: ["is", "isNot"],
  AppointmentCountOrderByAggregateInput: ["id", "doctorId", "patientId", "taskId"],
  AppointmentAvgOrderByAggregateInput: ["id", "doctorId", "patientId", "taskId"],
  AppointmentMaxOrderByAggregateInput: ["id", "doctorId", "patientId", "taskId"],
  AppointmentMinOrderByAggregateInput: ["id", "doctorId", "patientId", "taskId"],
  AppointmentSumOrderByAggregateInput: ["id", "doctorId", "patientId", "taskId"],
  RefreshTokenCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DoctorCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  RefreshTokenUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DoctorUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  EnumTokenTypeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutTokensNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutDoctorInput: ["create", "connectOrCreate", "connect"],
  PatientCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
  AppointmentCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PatientUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AppointmentUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DoctorCreateNestedOneWithoutPatientsInput: ["create", "connectOrCreate", "connect"],
  AppointmentCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumPatientStatusFieldUpdateOperationsInput: ["set"],
  EnumGenderFieldUpdateOperationsInput: ["set"],
  DoctorUpdateOneWithoutPatientsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AppointmentUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DoctorCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  AppointmentCreateNestedOneWithoutTaskInput: ["create", "connectOrCreate", "connect"],
  DoctorUpdateOneRequiredWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AppointmentUpdateOneWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DoctorCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
  PatientCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutAppointmentInput: ["create", "connectOrCreate", "connect"],
  DoctorUpdateOneRequiredWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PatientUpdateOneRequiredWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TaskUpdateOneRequiredWithoutAppointmentNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedJsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTokenTypeFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumTokenTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumPatientStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumGenderFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPatientStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  RefreshTokenCreateWithoutUserInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  RefreshTokenCreateOrConnectWithoutUserInput: ["where", "create"],
  RefreshTokenCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  DoctorCreateWithoutUserInput: ["specialty", "patients", "tasks", "appointments"],
  DoctorCreateOrConnectWithoutUserInput: ["where", "create"],
  RefreshTokenUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RefreshTokenUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RefreshTokenUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RefreshTokenScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "type", "token", "valid", "expiration", "userId"],
  DoctorUpsertWithoutUserInput: ["update", "create"],
  DoctorUpdateWithoutUserInput: ["specialty", "patients", "tasks", "appointments"],
  UserCreateWithoutTokensInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "Doctor"],
  UserCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserUpsertWithoutTokensInput: ["update", "create"],
  UserUpdateWithoutTokensInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "Doctor"],
  UserCreateWithoutDoctorInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  UserCreateOrConnectWithoutDoctorInput: ["where", "create"],
  PatientCreateWithoutDoctorInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "appointments"],
  PatientCreateOrConnectWithoutDoctorInput: ["where", "create"],
  PatientCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutDoctorInput: ["title", "description", "startDate", "endDate", "appointment"],
  TaskCreateOrConnectWithoutDoctorInput: ["where", "create"],
  TaskCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  AppointmentCreateWithoutDoctorInput: ["patient", "task"],
  AppointmentCreateOrConnectWithoutDoctorInput: ["where", "create"],
  AppointmentCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutDoctorInput: ["update", "create"],
  UserUpdateWithoutDoctorInput: ["createdAt", "email", "firstName", "lastName", "password", "role", "social", "tokens"],
  PatientUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  PatientUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  PatientUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  PatientScalarWhereInput: ["AND", "OR", "NOT", "id", "diagnosis", "status", "firstName", "lastName", "age", "doctorId", "gender", "notes", "phoneNumber"],
  TaskUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "doctorId", "startDate", "endDate"],
  AppointmentUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "taskId"],
  DoctorCreateWithoutPatientsInput: ["specialty", "user", "tasks", "appointments"],
  DoctorCreateOrConnectWithoutPatientsInput: ["where", "create"],
  AppointmentCreateWithoutPatientInput: ["doctor", "task"],
  AppointmentCreateOrConnectWithoutPatientInput: ["where", "create"],
  AppointmentCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
  DoctorUpsertWithoutPatientsInput: ["update", "create"],
  DoctorUpdateWithoutPatientsInput: ["specialty", "user", "tasks", "appointments"],
  AppointmentUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
  DoctorCreateWithoutTasksInput: ["specialty", "user", "patients", "appointments"],
  DoctorCreateOrConnectWithoutTasksInput: ["where", "create"],
  AppointmentCreateWithoutTaskInput: ["doctor", "patient"],
  AppointmentCreateOrConnectWithoutTaskInput: ["where", "create"],
  DoctorUpsertWithoutTasksInput: ["update", "create"],
  DoctorUpdateWithoutTasksInput: ["specialty", "user", "patients", "appointments"],
  AppointmentUpsertWithoutTaskInput: ["update", "create"],
  AppointmentUpdateWithoutTaskInput: ["doctor", "patient"],
  DoctorCreateWithoutAppointmentsInput: ["specialty", "user", "patients", "tasks"],
  DoctorCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
  PatientCreateWithoutAppointmentsInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "doctor"],
  PatientCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
  TaskCreateWithoutAppointmentInput: ["title", "description", "startDate", "endDate", "doctor"],
  TaskCreateOrConnectWithoutAppointmentInput: ["where", "create"],
  DoctorUpsertWithoutAppointmentsInput: ["update", "create"],
  DoctorUpdateWithoutAppointmentsInput: ["specialty", "user", "patients", "tasks"],
  PatientUpsertWithoutAppointmentsInput: ["update", "create"],
  PatientUpdateWithoutAppointmentsInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "doctor"],
  TaskUpsertWithoutAppointmentInput: ["update", "create"],
  TaskUpdateWithoutAppointmentInput: ["title", "description", "startDate", "endDate", "doctor"],
  RefreshTokenCreateManyUserInput: ["id", "createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  RefreshTokenUpdateWithoutUserInput: ["createdAt", "updatedAt", "type", "token", "valid", "expiration"],
  PatientCreateManyDoctorInput: ["id", "diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber"],
  TaskCreateManyDoctorInput: ["id", "title", "description", "startDate", "endDate"],
  AppointmentCreateManyDoctorInput: ["id", "patientId", "taskId"],
  PatientUpdateWithoutDoctorInput: ["diagnosis", "status", "firstName", "lastName", "age", "gender", "notes", "phoneNumber", "appointments"],
  TaskUpdateWithoutDoctorInput: ["title", "description", "startDate", "endDate", "appointment"],
  AppointmentUpdateWithoutDoctorInput: ["patient", "task"],
  AppointmentCreateManyPatientInput: ["id", "doctorId", "taskId"],
  AppointmentUpdateWithoutPatientInput: ["doctor", "task"]
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

