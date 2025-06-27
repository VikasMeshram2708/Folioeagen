
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profiler
 * 
 */
export type Profiler = $Result.DefaultSelection<Prisma.$ProfilerPayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model Employment
 * 
 */
export type Employment = $Result.DefaultSelection<Prisma.$EmploymentPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model Accomplishments
 * 
 */
export type Accomplishments = $Result.DefaultSelection<Prisma.$AccomplishmentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profilers
 * const profilers = await prisma.profiler.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profilers
   * const profilers = await prisma.profiler.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profiler`: Exposes CRUD operations for the **Profiler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profilers
    * const profilers = await prisma.profiler.findMany()
    * ```
    */
  get profiler(): Prisma.ProfilerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employment`: Exposes CRUD operations for the **Employment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employments
    * const employments = await prisma.employment.findMany()
    * ```
    */
  get employment(): Prisma.EmploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accomplishments`: Exposes CRUD operations for the **Accomplishments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accomplishments
    * const accomplishments = await prisma.accomplishments.findMany()
    * ```
    */
  get accomplishments(): Prisma.AccomplishmentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profiler: 'Profiler',
    Skills: 'Skills',
    Employment: 'Employment',
    Education: 'Education',
    Projects: 'Projects',
    Accomplishments: 'Accomplishments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profiler" | "skills" | "employment" | "education" | "projects" | "accomplishments"
      txIsolationLevel: never
    }
    model: {
      Profiler: {
        payload: Prisma.$ProfilerPayload<ExtArgs>
        fields: Prisma.ProfilerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          findFirst: {
            args: Prisma.ProfilerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          findMany: {
            args: Prisma.ProfilerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>[]
          }
          create: {
            args: Prisma.ProfilerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          createMany: {
            args: Prisma.ProfilerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfilerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          update: {
            args: Prisma.ProfilerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          deleteMany: {
            args: Prisma.ProfilerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfilerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilerPayload>
          }
          aggregate: {
            args: Prisma.ProfilerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiler>
          }
          groupBy: {
            args: Prisma.ProfilerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProfilerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProfilerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProfilerCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilerCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SkillsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SkillsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      Employment: {
        payload: Prisma.$EmploymentPayload<ExtArgs>
        fields: Prisma.EmploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          findFirst: {
            args: Prisma.EmploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          findMany: {
            args: Prisma.EmploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>[]
          }
          create: {
            args: Prisma.EmploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          createMany: {
            args: Prisma.EmploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          update: {
            args: Prisma.EmploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          deleteMany: {
            args: Prisma.EmploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentPayload>
          }
          aggregate: {
            args: Prisma.EmploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployment>
          }
          groupBy: {
            args: Prisma.EmploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmploymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmploymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmploymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmploymentCountArgs<ExtArgs>
            result: $Utils.Optional<EmploymentCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EducationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EducationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      Accomplishments: {
        payload: Prisma.$AccomplishmentsPayload<ExtArgs>
        fields: Prisma.AccomplishmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccomplishmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccomplishmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          findFirst: {
            args: Prisma.AccomplishmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccomplishmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          findMany: {
            args: Prisma.AccomplishmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>[]
          }
          create: {
            args: Prisma.AccomplishmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          createMany: {
            args: Prisma.AccomplishmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccomplishmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          update: {
            args: Prisma.AccomplishmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          deleteMany: {
            args: Prisma.AccomplishmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccomplishmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccomplishmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccomplishmentsPayload>
          }
          aggregate: {
            args: Prisma.AccomplishmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccomplishments>
          }
          groupBy: {
            args: Prisma.AccomplishmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccomplishmentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccomplishmentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccomplishmentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccomplishmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AccomplishmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profiler?: ProfilerOmit
    skills?: SkillsOmit
    employment?: EmploymentOmit
    education?: EducationOmit
    projects?: ProjectsOmit
    accomplishments?: AccomplishmentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfilerCountOutputType
   */

  export type ProfilerCountOutputType = {
    skills: number
    employment: number
    education: number
    projects: number
  }

  export type ProfilerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | ProfilerCountOutputTypeCountSkillsArgs
    employment?: boolean | ProfilerCountOutputTypeCountEmploymentArgs
    education?: boolean | ProfilerCountOutputTypeCountEducationArgs
    projects?: boolean | ProfilerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProfilerCountOutputType without action
   */
  export type ProfilerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilerCountOutputType
     */
    select?: ProfilerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilerCountOutputType without action
   */
  export type ProfilerCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
  }

  /**
   * ProfilerCountOutputType without action
   */
  export type ProfilerCountOutputTypeCountEmploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmploymentWhereInput
  }

  /**
   * ProfilerCountOutputType without action
   */
  export type ProfilerCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * ProfilerCountOutputType without action
   */
  export type ProfilerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profiler
   */

  export type AggregateProfiler = {
    _count: ProfilerCountAggregateOutputType | null
    _min: ProfilerMinAggregateOutputType | null
    _max: ProfilerMaxAggregateOutputType | null
  }

  export type ProfilerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    avatar_url: string | null
    summary: string | null
    dob: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    avatar_url: string | null
    summary: string | null
    dob: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilerCountAggregateOutputType = {
    id: number
    firstName: number
    middleName: number
    lastName: number
    email: number
    avatar_url: number
    summary: number
    dob: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfilerMinAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    avatar_url?: true
    summary?: true
    dob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilerMaxAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    avatar_url?: true
    summary?: true
    dob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilerCountAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    avatar_url?: true
    summary?: true
    dob?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfilerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiler to aggregate.
     */
    where?: ProfilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profilers to fetch.
     */
    orderBy?: ProfilerOrderByWithRelationInput | ProfilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profilers
    **/
    _count?: true | ProfilerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilerMaxAggregateInputType
  }

  export type GetProfilerAggregateType<T extends ProfilerAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiler[P]>
      : GetScalarType<T[P], AggregateProfiler[P]>
  }




  export type ProfilerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilerWhereInput
    orderBy?: ProfilerOrderByWithAggregationInput | ProfilerOrderByWithAggregationInput[]
    by: ProfilerScalarFieldEnum[] | ProfilerScalarFieldEnum
    having?: ProfilerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilerCountAggregateInputType | true
    _min?: ProfilerMinAggregateInputType
    _max?: ProfilerMaxAggregateInputType
  }

  export type ProfilerGroupByOutputType = {
    id: string
    firstName: string
    middleName: string | null
    lastName: string | null
    email: string
    avatar_url: string | null
    summary: string
    dob: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfilerCountAggregateOutputType | null
    _min: ProfilerMinAggregateOutputType | null
    _max: ProfilerMaxAggregateOutputType | null
  }

  type GetProfilerGroupByPayload<T extends ProfilerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilerGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilerGroupByOutputType[P]>
        }
      >
    >


  export type ProfilerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    avatar_url?: boolean
    summary?: boolean
    dob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | Profiler$skillsArgs<ExtArgs>
    employment?: boolean | Profiler$employmentArgs<ExtArgs>
    education?: boolean | Profiler$educationArgs<ExtArgs>
    projects?: boolean | Profiler$projectsArgs<ExtArgs>
    _count?: boolean | ProfilerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiler"]>



  export type ProfilerSelectScalar = {
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    avatar_url?: boolean
    summary?: boolean
    dob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfilerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "middleName" | "lastName" | "email" | "avatar_url" | "summary" | "dob" | "createdAt" | "updatedAt", ExtArgs["result"]["profiler"]>
  export type ProfilerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | Profiler$skillsArgs<ExtArgs>
    employment?: boolean | Profiler$employmentArgs<ExtArgs>
    education?: boolean | Profiler$educationArgs<ExtArgs>
    projects?: boolean | Profiler$projectsArgs<ExtArgs>
    _count?: boolean | ProfilerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfilerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiler"
    objects: {
      skills: Prisma.$SkillsPayload<ExtArgs>[]
      employment: Prisma.$EmploymentPayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      middleName: string | null
      lastName: string | null
      email: string
      avatar_url: string | null
      summary: string
      dob: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profiler"]>
    composites: {}
  }

  type ProfilerGetPayload<S extends boolean | null | undefined | ProfilerDefaultArgs> = $Result.GetResult<Prisma.$ProfilerPayload, S>

  type ProfilerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilerCountAggregateInputType | true
    }

  export interface ProfilerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiler'], meta: { name: 'Profiler' } }
    /**
     * Find zero or one Profiler that matches the filter.
     * @param {ProfilerFindUniqueArgs} args - Arguments to find a Profiler
     * @example
     * // Get one Profiler
     * const profiler = await prisma.profiler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilerFindUniqueArgs>(args: SelectSubset<T, ProfilerFindUniqueArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilerFindUniqueOrThrowArgs} args - Arguments to find a Profiler
     * @example
     * // Get one Profiler
     * const profiler = await prisma.profiler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerFindFirstArgs} args - Arguments to find a Profiler
     * @example
     * // Get one Profiler
     * const profiler = await prisma.profiler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilerFindFirstArgs>(args?: SelectSubset<T, ProfilerFindFirstArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerFindFirstOrThrowArgs} args - Arguments to find a Profiler
     * @example
     * // Get one Profiler
     * const profiler = await prisma.profiler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profilers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profilers
     * const profilers = await prisma.profiler.findMany()
     * 
     * // Get first 10 Profilers
     * const profilers = await prisma.profiler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilerWithIdOnly = await prisma.profiler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilerFindManyArgs>(args?: SelectSubset<T, ProfilerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiler.
     * @param {ProfilerCreateArgs} args - Arguments to create a Profiler.
     * @example
     * // Create one Profiler
     * const Profiler = await prisma.profiler.create({
     *   data: {
     *     // ... data to create a Profiler
     *   }
     * })
     * 
     */
    create<T extends ProfilerCreateArgs>(args: SelectSubset<T, ProfilerCreateArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profilers.
     * @param {ProfilerCreateManyArgs} args - Arguments to create many Profilers.
     * @example
     * // Create many Profilers
     * const profiler = await prisma.profiler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilerCreateManyArgs>(args?: SelectSubset<T, ProfilerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profiler.
     * @param {ProfilerDeleteArgs} args - Arguments to delete one Profiler.
     * @example
     * // Delete one Profiler
     * const Profiler = await prisma.profiler.delete({
     *   where: {
     *     // ... filter to delete one Profiler
     *   }
     * })
     * 
     */
    delete<T extends ProfilerDeleteArgs>(args: SelectSubset<T, ProfilerDeleteArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiler.
     * @param {ProfilerUpdateArgs} args - Arguments to update one Profiler.
     * @example
     * // Update one Profiler
     * const profiler = await prisma.profiler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilerUpdateArgs>(args: SelectSubset<T, ProfilerUpdateArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profilers.
     * @param {ProfilerDeleteManyArgs} args - Arguments to filter Profilers to delete.
     * @example
     * // Delete a few Profilers
     * const { count } = await prisma.profiler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilerDeleteManyArgs>(args?: SelectSubset<T, ProfilerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profilers
     * const profiler = await prisma.profiler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilerUpdateManyArgs>(args: SelectSubset<T, ProfilerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiler.
     * @param {ProfilerUpsertArgs} args - Arguments to update or create a Profiler.
     * @example
     * // Update or create a Profiler
     * const profiler = await prisma.profiler.upsert({
     *   create: {
     *     // ... data to create a Profiler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiler we want to update
     *   }
     * })
     */
    upsert<T extends ProfilerUpsertArgs>(args: SelectSubset<T, ProfilerUpsertArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profilers that matches the filter.
     * @param {ProfilerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profiler = await prisma.profiler.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProfilerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profiler.
     * @param {ProfilerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profiler = await prisma.profiler.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProfilerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Profilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerCountArgs} args - Arguments to filter Profilers to count.
     * @example
     * // Count the number of Profilers
     * const count = await prisma.profiler.count({
     *   where: {
     *     // ... the filter for the Profilers we want to count
     *   }
     * })
    **/
    count<T extends ProfilerCountArgs>(
      args?: Subset<T, ProfilerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilerAggregateArgs>(args: Subset<T, ProfilerAggregateArgs>): Prisma.PrismaPromise<GetProfilerAggregateType<T>>

    /**
     * Group by Profiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilerGroupByArgs['orderBy'] }
        : { orderBy?: ProfilerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiler model
   */
  readonly fields: ProfilerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends Profiler$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Profiler$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employment<T extends Profiler$employmentArgs<ExtArgs> = {}>(args?: Subset<T, Profiler$employmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends Profiler$educationArgs<ExtArgs> = {}>(args?: Subset<T, Profiler$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Profiler$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Profiler$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profiler model
   */
  interface ProfilerFieldRefs {
    readonly id: FieldRef<"Profiler", 'String'>
    readonly firstName: FieldRef<"Profiler", 'String'>
    readonly middleName: FieldRef<"Profiler", 'String'>
    readonly lastName: FieldRef<"Profiler", 'String'>
    readonly email: FieldRef<"Profiler", 'String'>
    readonly avatar_url: FieldRef<"Profiler", 'String'>
    readonly summary: FieldRef<"Profiler", 'String'>
    readonly dob: FieldRef<"Profiler", 'String'>
    readonly createdAt: FieldRef<"Profiler", 'DateTime'>
    readonly updatedAt: FieldRef<"Profiler", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profiler findUnique
   */
  export type ProfilerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter, which Profiler to fetch.
     */
    where: ProfilerWhereUniqueInput
  }

  /**
   * Profiler findUniqueOrThrow
   */
  export type ProfilerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter, which Profiler to fetch.
     */
    where: ProfilerWhereUniqueInput
  }

  /**
   * Profiler findFirst
   */
  export type ProfilerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter, which Profiler to fetch.
     */
    where?: ProfilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profilers to fetch.
     */
    orderBy?: ProfilerOrderByWithRelationInput | ProfilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profilers.
     */
    cursor?: ProfilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profilers.
     */
    distinct?: ProfilerScalarFieldEnum | ProfilerScalarFieldEnum[]
  }

  /**
   * Profiler findFirstOrThrow
   */
  export type ProfilerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter, which Profiler to fetch.
     */
    where?: ProfilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profilers to fetch.
     */
    orderBy?: ProfilerOrderByWithRelationInput | ProfilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profilers.
     */
    cursor?: ProfilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profilers.
     */
    distinct?: ProfilerScalarFieldEnum | ProfilerScalarFieldEnum[]
  }

  /**
   * Profiler findMany
   */
  export type ProfilerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter, which Profilers to fetch.
     */
    where?: ProfilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profilers to fetch.
     */
    orderBy?: ProfilerOrderByWithRelationInput | ProfilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profilers.
     */
    cursor?: ProfilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profilers.
     */
    skip?: number
    distinct?: ProfilerScalarFieldEnum | ProfilerScalarFieldEnum[]
  }

  /**
   * Profiler create
   */
  export type ProfilerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiler.
     */
    data: XOR<ProfilerCreateInput, ProfilerUncheckedCreateInput>
  }

  /**
   * Profiler createMany
   */
  export type ProfilerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profilers.
     */
    data: ProfilerCreateManyInput | ProfilerCreateManyInput[]
  }

  /**
   * Profiler update
   */
  export type ProfilerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiler.
     */
    data: XOR<ProfilerUpdateInput, ProfilerUncheckedUpdateInput>
    /**
     * Choose, which Profiler to update.
     */
    where: ProfilerWhereUniqueInput
  }

  /**
   * Profiler updateMany
   */
  export type ProfilerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profilers.
     */
    data: XOR<ProfilerUpdateManyMutationInput, ProfilerUncheckedUpdateManyInput>
    /**
     * Filter which Profilers to update
     */
    where?: ProfilerWhereInput
    /**
     * Limit how many Profilers to update.
     */
    limit?: number
  }

  /**
   * Profiler upsert
   */
  export type ProfilerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiler to update in case it exists.
     */
    where: ProfilerWhereUniqueInput
    /**
     * In case the Profiler found by the `where` argument doesn't exist, create a new Profiler with this data.
     */
    create: XOR<ProfilerCreateInput, ProfilerUncheckedCreateInput>
    /**
     * In case the Profiler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilerUpdateInput, ProfilerUncheckedUpdateInput>
  }

  /**
   * Profiler delete
   */
  export type ProfilerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    /**
     * Filter which Profiler to delete.
     */
    where: ProfilerWhereUniqueInput
  }

  /**
   * Profiler deleteMany
   */
  export type ProfilerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profilers to delete
     */
    where?: ProfilerWhereInput
    /**
     * Limit how many Profilers to delete.
     */
    limit?: number
  }

  /**
   * Profiler findRaw
   */
  export type ProfilerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profiler aggregateRaw
   */
  export type ProfilerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profiler.skills
   */
  export type Profiler$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Profiler.employment
   */
  export type Profiler$employmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    where?: EmploymentWhereInput
    orderBy?: EmploymentOrderByWithRelationInput | EmploymentOrderByWithRelationInput[]
    cursor?: EmploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmploymentScalarFieldEnum | EmploymentScalarFieldEnum[]
  }

  /**
   * Profiler.education
   */
  export type Profiler$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Profiler.projects
   */
  export type Profiler$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Profiler without action
   */
  export type ProfilerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
  }


  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    rating: number | null
  }

  export type SkillsSumAggregateOutputType = {
    rating: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: string | null
    name: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    name: number
    rating: number
    createdAt: number
    updatedAt: number
    profilerId: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    rating?: true
  }

  export type SkillsSumAggregateInputType = {
    rating?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: string
    name: string
    rating: number
    createdAt: Date
    updatedAt: Date
    profilerId: string | null
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
    profiler?: boolean | Skills$profilerArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>



  export type SkillsSelectScalar = {
    id?: boolean
    name?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
  }

  export type SkillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rating" | "createdAt" | "updatedAt" | "profilerId", ExtArgs["result"]["skills"]>
  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiler?: boolean | Skills$profilerArgs<ExtArgs>
  }

  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      profiler: Prisma.$ProfilerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rating: number
      createdAt: Date
      updatedAt: Date
      profilerId: string | null
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillsFindUniqueArgs>(args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillsFindFirstArgs>(args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillsFindManyArgs>(args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends SkillsCreateArgs>(args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillsCreateManyArgs>(args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends SkillsDeleteArgs>(args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillsUpdateArgs>(args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillsDeleteManyArgs>(args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillsUpdateManyArgs>(args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends SkillsUpsertArgs>(args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * @param {SkillsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skills = await prisma.skills.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SkillsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Skills.
     * @param {SkillsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skills = await prisma.skills.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SkillsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiler<T extends Skills$profilerArgs<ExtArgs> = {}>(args?: Subset<T, Skills$profilerArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skills model
   */
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'String'>
    readonly name: FieldRef<"Skills", 'String'>
    readonly rating: FieldRef<"Skills", 'Float'>
    readonly createdAt: FieldRef<"Skills", 'DateTime'>
    readonly updatedAt: FieldRef<"Skills", 'DateTime'>
    readonly profilerId: FieldRef<"Skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }

  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
  }

  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }

  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skills findRaw
   */
  export type SkillsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skills aggregateRaw
   */
  export type SkillsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skills.profiler
   */
  export type Skills$profilerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    where?: ProfilerWhereInput
  }

  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
  }


  /**
   * Model Employment
   */

  export type AggregateEmployment = {
    _count: EmploymentCountAggregateOutputType | null
    _min: EmploymentMinAggregateOutputType | null
    _max: EmploymentMaxAggregateOutputType | null
  }

  export type EmploymentMinAggregateOutputType = {
    id: string | null
    title: string | null
    companyName: string | null
    companyDetails: string | null
    myRole: string | null
    summary: string | null
    tenure: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type EmploymentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    companyName: string | null
    companyDetails: string | null
    myRole: string | null
    summary: string | null
    tenure: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type EmploymentCountAggregateOutputType = {
    id: number
    title: number
    companyName: number
    companyDetails: number
    myRole: number
    summary: number
    tenure: number
    createdAt: number
    updatedAt: number
    profilerId: number
    _all: number
  }


  export type EmploymentMinAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyDetails?: true
    myRole?: true
    summary?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type EmploymentMaxAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyDetails?: true
    myRole?: true
    summary?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type EmploymentCountAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyDetails?: true
    myRole?: true
    summary?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
    _all?: true
  }

  export type EmploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employment to aggregate.
     */
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     */
    orderBy?: EmploymentOrderByWithRelationInput | EmploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employments
    **/
    _count?: true | EmploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmploymentMaxAggregateInputType
  }

  export type GetEmploymentAggregateType<T extends EmploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployment[P]>
      : GetScalarType<T[P], AggregateEmployment[P]>
  }




  export type EmploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmploymentWhereInput
    orderBy?: EmploymentOrderByWithAggregationInput | EmploymentOrderByWithAggregationInput[]
    by: EmploymentScalarFieldEnum[] | EmploymentScalarFieldEnum
    having?: EmploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmploymentCountAggregateInputType | true
    _min?: EmploymentMinAggregateInputType
    _max?: EmploymentMaxAggregateInputType
  }

  export type EmploymentGroupByOutputType = {
    id: string
    title: string
    companyName: string
    companyDetails: string | null
    myRole: string
    summary: string | null
    tenure: Date
    createdAt: Date
    updatedAt: Date
    profilerId: string | null
    _count: EmploymentCountAggregateOutputType | null
    _min: EmploymentMinAggregateOutputType | null
    _max: EmploymentMaxAggregateOutputType | null
  }

  type GetEmploymentGroupByPayload<T extends EmploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmploymentGroupByOutputType[P]>
            : GetScalarType<T[P], EmploymentGroupByOutputType[P]>
        }
      >
    >


  export type EmploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyDetails?: boolean
    myRole?: boolean
    summary?: boolean
    tenure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
    profiler?: boolean | Employment$profilerArgs<ExtArgs>
  }, ExtArgs["result"]["employment"]>



  export type EmploymentSelectScalar = {
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyDetails?: boolean
    myRole?: boolean
    summary?: boolean
    tenure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
  }

  export type EmploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "companyName" | "companyDetails" | "myRole" | "summary" | "tenure" | "createdAt" | "updatedAt" | "profilerId", ExtArgs["result"]["employment"]>
  export type EmploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiler?: boolean | Employment$profilerArgs<ExtArgs>
  }

  export type $EmploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employment"
    objects: {
      profiler: Prisma.$ProfilerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      companyName: string
      companyDetails: string | null
      myRole: string
      summary: string | null
      tenure: Date
      createdAt: Date
      updatedAt: Date
      profilerId: string | null
    }, ExtArgs["result"]["employment"]>
    composites: {}
  }

  type EmploymentGetPayload<S extends boolean | null | undefined | EmploymentDefaultArgs> = $Result.GetResult<Prisma.$EmploymentPayload, S>

  type EmploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmploymentCountAggregateInputType | true
    }

  export interface EmploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employment'], meta: { name: 'Employment' } }
    /**
     * Find zero or one Employment that matches the filter.
     * @param {EmploymentFindUniqueArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmploymentFindUniqueArgs>(args: SelectSubset<T, EmploymentFindUniqueArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmploymentFindUniqueOrThrowArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, EmploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindFirstArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmploymentFindFirstArgs>(args?: SelectSubset<T, EmploymentFindFirstArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindFirstOrThrowArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, EmploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employments
     * const employments = await prisma.employment.findMany()
     * 
     * // Get first 10 Employments
     * const employments = await prisma.employment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employmentWithIdOnly = await prisma.employment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmploymentFindManyArgs>(args?: SelectSubset<T, EmploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employment.
     * @param {EmploymentCreateArgs} args - Arguments to create a Employment.
     * @example
     * // Create one Employment
     * const Employment = await prisma.employment.create({
     *   data: {
     *     // ... data to create a Employment
     *   }
     * })
     * 
     */
    create<T extends EmploymentCreateArgs>(args: SelectSubset<T, EmploymentCreateArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employments.
     * @param {EmploymentCreateManyArgs} args - Arguments to create many Employments.
     * @example
     * // Create many Employments
     * const employment = await prisma.employment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmploymentCreateManyArgs>(args?: SelectSubset<T, EmploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employment.
     * @param {EmploymentDeleteArgs} args - Arguments to delete one Employment.
     * @example
     * // Delete one Employment
     * const Employment = await prisma.employment.delete({
     *   where: {
     *     // ... filter to delete one Employment
     *   }
     * })
     * 
     */
    delete<T extends EmploymentDeleteArgs>(args: SelectSubset<T, EmploymentDeleteArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employment.
     * @param {EmploymentUpdateArgs} args - Arguments to update one Employment.
     * @example
     * // Update one Employment
     * const employment = await prisma.employment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmploymentUpdateArgs>(args: SelectSubset<T, EmploymentUpdateArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employments.
     * @param {EmploymentDeleteManyArgs} args - Arguments to filter Employments to delete.
     * @example
     * // Delete a few Employments
     * const { count } = await prisma.employment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmploymentDeleteManyArgs>(args?: SelectSubset<T, EmploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employments
     * const employment = await prisma.employment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmploymentUpdateManyArgs>(args: SelectSubset<T, EmploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employment.
     * @param {EmploymentUpsertArgs} args - Arguments to update or create a Employment.
     * @example
     * // Update or create a Employment
     * const employment = await prisma.employment.upsert({
     *   create: {
     *     // ... data to create a Employment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employment we want to update
     *   }
     * })
     */
    upsert<T extends EmploymentUpsertArgs>(args: SelectSubset<T, EmploymentUpsertArgs<ExtArgs>>): Prisma__EmploymentClient<$Result.GetResult<Prisma.$EmploymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employments that matches the filter.
     * @param {EmploymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const employment = await prisma.employment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmploymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Employment.
     * @param {EmploymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const employment = await prisma.employment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmploymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Employments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentCountArgs} args - Arguments to filter Employments to count.
     * @example
     * // Count the number of Employments
     * const count = await prisma.employment.count({
     *   where: {
     *     // ... the filter for the Employments we want to count
     *   }
     * })
    **/
    count<T extends EmploymentCountArgs>(
      args?: Subset<T, EmploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmploymentAggregateArgs>(args: Subset<T, EmploymentAggregateArgs>): Prisma.PrismaPromise<GetEmploymentAggregateType<T>>

    /**
     * Group by Employment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmploymentGroupByArgs['orderBy'] }
        : { orderBy?: EmploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employment model
   */
  readonly fields: EmploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiler<T extends Employment$profilerArgs<ExtArgs> = {}>(args?: Subset<T, Employment$profilerArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employment model
   */
  interface EmploymentFieldRefs {
    readonly id: FieldRef<"Employment", 'String'>
    readonly title: FieldRef<"Employment", 'String'>
    readonly companyName: FieldRef<"Employment", 'String'>
    readonly companyDetails: FieldRef<"Employment", 'String'>
    readonly myRole: FieldRef<"Employment", 'String'>
    readonly summary: FieldRef<"Employment", 'String'>
    readonly tenure: FieldRef<"Employment", 'DateTime'>
    readonly createdAt: FieldRef<"Employment", 'DateTime'>
    readonly updatedAt: FieldRef<"Employment", 'DateTime'>
    readonly profilerId: FieldRef<"Employment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employment findUnique
   */
  export type EmploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter, which Employment to fetch.
     */
    where: EmploymentWhereUniqueInput
  }

  /**
   * Employment findUniqueOrThrow
   */
  export type EmploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter, which Employment to fetch.
     */
    where: EmploymentWhereUniqueInput
  }

  /**
   * Employment findFirst
   */
  export type EmploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter, which Employment to fetch.
     */
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     */
    orderBy?: EmploymentOrderByWithRelationInput | EmploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employments.
     */
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employments.
     */
    distinct?: EmploymentScalarFieldEnum | EmploymentScalarFieldEnum[]
  }

  /**
   * Employment findFirstOrThrow
   */
  export type EmploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter, which Employment to fetch.
     */
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     */
    orderBy?: EmploymentOrderByWithRelationInput | EmploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employments.
     */
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employments.
     */
    distinct?: EmploymentScalarFieldEnum | EmploymentScalarFieldEnum[]
  }

  /**
   * Employment findMany
   */
  export type EmploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter, which Employments to fetch.
     */
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     */
    orderBy?: EmploymentOrderByWithRelationInput | EmploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employments.
     */
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     */
    skip?: number
    distinct?: EmploymentScalarFieldEnum | EmploymentScalarFieldEnum[]
  }

  /**
   * Employment create
   */
  export type EmploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Employment.
     */
    data: XOR<EmploymentCreateInput, EmploymentUncheckedCreateInput>
  }

  /**
   * Employment createMany
   */
  export type EmploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employments.
     */
    data: EmploymentCreateManyInput | EmploymentCreateManyInput[]
  }

  /**
   * Employment update
   */
  export type EmploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Employment.
     */
    data: XOR<EmploymentUpdateInput, EmploymentUncheckedUpdateInput>
    /**
     * Choose, which Employment to update.
     */
    where: EmploymentWhereUniqueInput
  }

  /**
   * Employment updateMany
   */
  export type EmploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employments.
     */
    data: XOR<EmploymentUpdateManyMutationInput, EmploymentUncheckedUpdateManyInput>
    /**
     * Filter which Employments to update
     */
    where?: EmploymentWhereInput
    /**
     * Limit how many Employments to update.
     */
    limit?: number
  }

  /**
   * Employment upsert
   */
  export type EmploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Employment to update in case it exists.
     */
    where: EmploymentWhereUniqueInput
    /**
     * In case the Employment found by the `where` argument doesn't exist, create a new Employment with this data.
     */
    create: XOR<EmploymentCreateInput, EmploymentUncheckedCreateInput>
    /**
     * In case the Employment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmploymentUpdateInput, EmploymentUncheckedUpdateInput>
  }

  /**
   * Employment delete
   */
  export type EmploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
    /**
     * Filter which Employment to delete.
     */
    where: EmploymentWhereUniqueInput
  }

  /**
   * Employment deleteMany
   */
  export type EmploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employments to delete
     */
    where?: EmploymentWhereInput
    /**
     * Limit how many Employments to delete.
     */
    limit?: number
  }

  /**
   * Employment findRaw
   */
  export type EmploymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Employment aggregateRaw
   */
  export type EmploymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Employment.profiler
   */
  export type Employment$profilerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    where?: ProfilerWhereInput
  }

  /**
   * Employment without action
   */
  export type EmploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employment
     */
    select?: EmploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employment
     */
    omit?: EmploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    education: string | null
    degreeName: string | null
    collegeName: string | null
    universityName: string | null
    tenure: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    education: string | null
    degreeName: string | null
    collegeName: string | null
    universityName: string | null
    tenure: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    education: number
    degreeName: number
    collegeName: number
    universityName: number
    tenure: number
    createdAt: number
    updatedAt: number
    profilerId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    education?: true
    degreeName?: true
    collegeName?: true
    universityName?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    education?: true
    degreeName?: true
    collegeName?: true
    universityName?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    education?: true
    degreeName?: true
    collegeName?: true
    universityName?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date
    createdAt: Date
    updatedAt: Date
    profilerId: string | null
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education?: boolean
    degreeName?: boolean
    collegeName?: boolean
    universityName?: boolean
    tenure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
    profiler?: boolean | Education$profilerArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>



  export type EducationSelectScalar = {
    id?: boolean
    education?: boolean
    degreeName?: boolean
    collegeName?: boolean
    universityName?: boolean
    tenure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "education" | "degreeName" | "collegeName" | "universityName" | "tenure" | "createdAt" | "updatedAt" | "profilerId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiler?: boolean | Education$profilerArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      profiler: Prisma.$ProfilerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      education: string
      degreeName: string
      collegeName: string
      universityName: string
      tenure: Date
      createdAt: Date
      updatedAt: Date
      profilerId: string | null
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * @param {EducationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const education = await prisma.education.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EducationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Education.
     * @param {EducationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const education = await prisma.education.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EducationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiler<T extends Education$profilerArgs<ExtArgs> = {}>(args?: Subset<T, Education$profilerArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly education: FieldRef<"Education", 'String'>
    readonly degreeName: FieldRef<"Education", 'String'>
    readonly collegeName: FieldRef<"Education", 'String'>
    readonly universityName: FieldRef<"Education", 'String'>
    readonly tenure: FieldRef<"Education", 'DateTime'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
    readonly profilerId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education findRaw
   */
  export type EducationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education aggregateRaw
   */
  export type EducationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education.profiler
   */
  export type Education$profilerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    where?: ProfilerWhereInput
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    githubLink: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    githubLink: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profilerId: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    githubLink: number
    videoUrl: number
    thumbnailUrl: number
    websiteUrl: number
    createdAt: number
    updatedAt: number
    profilerId: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubLink?: true
    videoUrl?: true
    thumbnailUrl?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubLink?: true
    videoUrl?: true
    thumbnailUrl?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubLink?: true
    videoUrl?: true
    thumbnailUrl?: true
    websiteUrl?: true
    createdAt?: true
    updatedAt?: true
    profilerId?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    title: string
    description: string
    githubLink: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    websiteUrl: string[]
    createdAt: Date
    updatedAt: Date
    profilerId: string | null
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    githubLink?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    websiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
    profiler?: boolean | Projects$profilerArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>



  export type ProjectsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    githubLink?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    websiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilerId?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "githubLink" | "videoUrl" | "thumbnailUrl" | "websiteUrl" | "createdAt" | "updatedAt" | "profilerId", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiler?: boolean | Projects$profilerArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      profiler: Prisma.$ProfilerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      githubLink: string | null
      videoUrl: string | null
      thumbnailUrl: string | null
      websiteUrl: string[]
      createdAt: Date
      updatedAt: Date
      profilerId: string | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {ProjectsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projects = await prisma.projects.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Projects.
     * @param {ProjectsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projects = await prisma.projects.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiler<T extends Projects$profilerArgs<ExtArgs> = {}>(args?: Subset<T, Projects$profilerArgs<ExtArgs>>): Prisma__ProfilerClient<$Result.GetResult<Prisma.$ProfilerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'String'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly description: FieldRef<"Projects", 'String'>
    readonly githubLink: FieldRef<"Projects", 'String'>
    readonly videoUrl: FieldRef<"Projects", 'String'>
    readonly thumbnailUrl: FieldRef<"Projects", 'String'>
    readonly websiteUrl: FieldRef<"Projects", 'String[]'>
    readonly createdAt: FieldRef<"Projects", 'DateTime'>
    readonly updatedAt: FieldRef<"Projects", 'DateTime'>
    readonly profilerId: FieldRef<"Projects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects findRaw
   */
  export type ProjectsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Projects aggregateRaw
   */
  export type ProjectsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Projects.profiler
   */
  export type Projects$profilerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiler
     */
    select?: ProfilerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiler
     */
    omit?: ProfilerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilerInclude<ExtArgs> | null
    where?: ProfilerWhereInput
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model Accomplishments
   */

  export type AggregateAccomplishments = {
    _count: AccomplishmentsCountAggregateOutputType | null
    _min: AccomplishmentsMinAggregateOutputType | null
    _max: AccomplishmentsMaxAggregateOutputType | null
  }

  export type AccomplishmentsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccomplishmentsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccomplishmentsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccomplishmentsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccomplishmentsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccomplishmentsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccomplishmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accomplishments to aggregate.
     */
    where?: AccomplishmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accomplishments to fetch.
     */
    orderBy?: AccomplishmentsOrderByWithRelationInput | AccomplishmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccomplishmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accomplishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accomplishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accomplishments
    **/
    _count?: true | AccomplishmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccomplishmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccomplishmentsMaxAggregateInputType
  }

  export type GetAccomplishmentsAggregateType<T extends AccomplishmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccomplishments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccomplishments[P]>
      : GetScalarType<T[P], AggregateAccomplishments[P]>
  }




  export type AccomplishmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccomplishmentsWhereInput
    orderBy?: AccomplishmentsOrderByWithAggregationInput | AccomplishmentsOrderByWithAggregationInput[]
    by: AccomplishmentsScalarFieldEnum[] | AccomplishmentsScalarFieldEnum
    having?: AccomplishmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccomplishmentsCountAggregateInputType | true
    _min?: AccomplishmentsMinAggregateInputType
    _max?: AccomplishmentsMaxAggregateInputType
  }

  export type AccomplishmentsGroupByOutputType = {
    id: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: AccomplishmentsCountAggregateOutputType | null
    _min: AccomplishmentsMinAggregateOutputType | null
    _max: AccomplishmentsMaxAggregateOutputType | null
  }

  type GetAccomplishmentsGroupByPayload<T extends AccomplishmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccomplishmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccomplishmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccomplishmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AccomplishmentsGroupByOutputType[P]>
        }
      >
    >


  export type AccomplishmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accomplishments"]>



  export type AccomplishmentsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccomplishmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["accomplishments"]>

  export type $AccomplishmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accomplishments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accomplishments"]>
    composites: {}
  }

  type AccomplishmentsGetPayload<S extends boolean | null | undefined | AccomplishmentsDefaultArgs> = $Result.GetResult<Prisma.$AccomplishmentsPayload, S>

  type AccomplishmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccomplishmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccomplishmentsCountAggregateInputType | true
    }

  export interface AccomplishmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accomplishments'], meta: { name: 'Accomplishments' } }
    /**
     * Find zero or one Accomplishments that matches the filter.
     * @param {AccomplishmentsFindUniqueArgs} args - Arguments to find a Accomplishments
     * @example
     * // Get one Accomplishments
     * const accomplishments = await prisma.accomplishments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccomplishmentsFindUniqueArgs>(args: SelectSubset<T, AccomplishmentsFindUniqueArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accomplishments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccomplishmentsFindUniqueOrThrowArgs} args - Arguments to find a Accomplishments
     * @example
     * // Get one Accomplishments
     * const accomplishments = await prisma.accomplishments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccomplishmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccomplishmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accomplishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsFindFirstArgs} args - Arguments to find a Accomplishments
     * @example
     * // Get one Accomplishments
     * const accomplishments = await prisma.accomplishments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccomplishmentsFindFirstArgs>(args?: SelectSubset<T, AccomplishmentsFindFirstArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accomplishments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsFindFirstOrThrowArgs} args - Arguments to find a Accomplishments
     * @example
     * // Get one Accomplishments
     * const accomplishments = await prisma.accomplishments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccomplishmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccomplishmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accomplishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accomplishments
     * const accomplishments = await prisma.accomplishments.findMany()
     * 
     * // Get first 10 Accomplishments
     * const accomplishments = await prisma.accomplishments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accomplishmentsWithIdOnly = await prisma.accomplishments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccomplishmentsFindManyArgs>(args?: SelectSubset<T, AccomplishmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accomplishments.
     * @param {AccomplishmentsCreateArgs} args - Arguments to create a Accomplishments.
     * @example
     * // Create one Accomplishments
     * const Accomplishments = await prisma.accomplishments.create({
     *   data: {
     *     // ... data to create a Accomplishments
     *   }
     * })
     * 
     */
    create<T extends AccomplishmentsCreateArgs>(args: SelectSubset<T, AccomplishmentsCreateArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accomplishments.
     * @param {AccomplishmentsCreateManyArgs} args - Arguments to create many Accomplishments.
     * @example
     * // Create many Accomplishments
     * const accomplishments = await prisma.accomplishments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccomplishmentsCreateManyArgs>(args?: SelectSubset<T, AccomplishmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accomplishments.
     * @param {AccomplishmentsDeleteArgs} args - Arguments to delete one Accomplishments.
     * @example
     * // Delete one Accomplishments
     * const Accomplishments = await prisma.accomplishments.delete({
     *   where: {
     *     // ... filter to delete one Accomplishments
     *   }
     * })
     * 
     */
    delete<T extends AccomplishmentsDeleteArgs>(args: SelectSubset<T, AccomplishmentsDeleteArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accomplishments.
     * @param {AccomplishmentsUpdateArgs} args - Arguments to update one Accomplishments.
     * @example
     * // Update one Accomplishments
     * const accomplishments = await prisma.accomplishments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccomplishmentsUpdateArgs>(args: SelectSubset<T, AccomplishmentsUpdateArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accomplishments.
     * @param {AccomplishmentsDeleteManyArgs} args - Arguments to filter Accomplishments to delete.
     * @example
     * // Delete a few Accomplishments
     * const { count } = await prisma.accomplishments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccomplishmentsDeleteManyArgs>(args?: SelectSubset<T, AccomplishmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accomplishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accomplishments
     * const accomplishments = await prisma.accomplishments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccomplishmentsUpdateManyArgs>(args: SelectSubset<T, AccomplishmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accomplishments.
     * @param {AccomplishmentsUpsertArgs} args - Arguments to update or create a Accomplishments.
     * @example
     * // Update or create a Accomplishments
     * const accomplishments = await prisma.accomplishments.upsert({
     *   create: {
     *     // ... data to create a Accomplishments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accomplishments we want to update
     *   }
     * })
     */
    upsert<T extends AccomplishmentsUpsertArgs>(args: SelectSubset<T, AccomplishmentsUpsertArgs<ExtArgs>>): Prisma__AccomplishmentsClient<$Result.GetResult<Prisma.$AccomplishmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accomplishments that matches the filter.
     * @param {AccomplishmentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accomplishments = await prisma.accomplishments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccomplishmentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Accomplishments.
     * @param {AccomplishmentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accomplishments = await prisma.accomplishments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccomplishmentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accomplishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsCountArgs} args - Arguments to filter Accomplishments to count.
     * @example
     * // Count the number of Accomplishments
     * const count = await prisma.accomplishments.count({
     *   where: {
     *     // ... the filter for the Accomplishments we want to count
     *   }
     * })
    **/
    count<T extends AccomplishmentsCountArgs>(
      args?: Subset<T, AccomplishmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccomplishmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accomplishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccomplishmentsAggregateArgs>(args: Subset<T, AccomplishmentsAggregateArgs>): Prisma.PrismaPromise<GetAccomplishmentsAggregateType<T>>

    /**
     * Group by Accomplishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccomplishmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccomplishmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccomplishmentsGroupByArgs['orderBy'] }
        : { orderBy?: AccomplishmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccomplishmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccomplishmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accomplishments model
   */
  readonly fields: AccomplishmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accomplishments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccomplishmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accomplishments model
   */
  interface AccomplishmentsFieldRefs {
    readonly id: FieldRef<"Accomplishments", 'String'>
    readonly title: FieldRef<"Accomplishments", 'String'>
    readonly description: FieldRef<"Accomplishments", 'String'>
    readonly createdAt: FieldRef<"Accomplishments", 'DateTime'>
    readonly updatedAt: FieldRef<"Accomplishments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accomplishments findUnique
   */
  export type AccomplishmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter, which Accomplishments to fetch.
     */
    where: AccomplishmentsWhereUniqueInput
  }

  /**
   * Accomplishments findUniqueOrThrow
   */
  export type AccomplishmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter, which Accomplishments to fetch.
     */
    where: AccomplishmentsWhereUniqueInput
  }

  /**
   * Accomplishments findFirst
   */
  export type AccomplishmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter, which Accomplishments to fetch.
     */
    where?: AccomplishmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accomplishments to fetch.
     */
    orderBy?: AccomplishmentsOrderByWithRelationInput | AccomplishmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accomplishments.
     */
    cursor?: AccomplishmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accomplishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accomplishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accomplishments.
     */
    distinct?: AccomplishmentsScalarFieldEnum | AccomplishmentsScalarFieldEnum[]
  }

  /**
   * Accomplishments findFirstOrThrow
   */
  export type AccomplishmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter, which Accomplishments to fetch.
     */
    where?: AccomplishmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accomplishments to fetch.
     */
    orderBy?: AccomplishmentsOrderByWithRelationInput | AccomplishmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accomplishments.
     */
    cursor?: AccomplishmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accomplishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accomplishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accomplishments.
     */
    distinct?: AccomplishmentsScalarFieldEnum | AccomplishmentsScalarFieldEnum[]
  }

  /**
   * Accomplishments findMany
   */
  export type AccomplishmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter, which Accomplishments to fetch.
     */
    where?: AccomplishmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accomplishments to fetch.
     */
    orderBy?: AccomplishmentsOrderByWithRelationInput | AccomplishmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accomplishments.
     */
    cursor?: AccomplishmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accomplishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accomplishments.
     */
    skip?: number
    distinct?: AccomplishmentsScalarFieldEnum | AccomplishmentsScalarFieldEnum[]
  }

  /**
   * Accomplishments create
   */
  export type AccomplishmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Accomplishments.
     */
    data: XOR<AccomplishmentsCreateInput, AccomplishmentsUncheckedCreateInput>
  }

  /**
   * Accomplishments createMany
   */
  export type AccomplishmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accomplishments.
     */
    data: AccomplishmentsCreateManyInput | AccomplishmentsCreateManyInput[]
  }

  /**
   * Accomplishments update
   */
  export type AccomplishmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Accomplishments.
     */
    data: XOR<AccomplishmentsUpdateInput, AccomplishmentsUncheckedUpdateInput>
    /**
     * Choose, which Accomplishments to update.
     */
    where: AccomplishmentsWhereUniqueInput
  }

  /**
   * Accomplishments updateMany
   */
  export type AccomplishmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accomplishments.
     */
    data: XOR<AccomplishmentsUpdateManyMutationInput, AccomplishmentsUncheckedUpdateManyInput>
    /**
     * Filter which Accomplishments to update
     */
    where?: AccomplishmentsWhereInput
    /**
     * Limit how many Accomplishments to update.
     */
    limit?: number
  }

  /**
   * Accomplishments upsert
   */
  export type AccomplishmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Accomplishments to update in case it exists.
     */
    where: AccomplishmentsWhereUniqueInput
    /**
     * In case the Accomplishments found by the `where` argument doesn't exist, create a new Accomplishments with this data.
     */
    create: XOR<AccomplishmentsCreateInput, AccomplishmentsUncheckedCreateInput>
    /**
     * In case the Accomplishments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccomplishmentsUpdateInput, AccomplishmentsUncheckedUpdateInput>
  }

  /**
   * Accomplishments delete
   */
  export type AccomplishmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
    /**
     * Filter which Accomplishments to delete.
     */
    where: AccomplishmentsWhereUniqueInput
  }

  /**
   * Accomplishments deleteMany
   */
  export type AccomplishmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accomplishments to delete
     */
    where?: AccomplishmentsWhereInput
    /**
     * Limit how many Accomplishments to delete.
     */
    limit?: number
  }

  /**
   * Accomplishments findRaw
   */
  export type AccomplishmentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Accomplishments aggregateRaw
   */
  export type AccomplishmentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Accomplishments without action
   */
  export type AccomplishmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accomplishments
     */
    select?: AccomplishmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accomplishments
     */
    omit?: AccomplishmentsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ProfilerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    email: 'email',
    avatar_url: 'avatar_url',
    summary: 'summary',
    dob: 'dob',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfilerScalarFieldEnum = (typeof ProfilerScalarFieldEnum)[keyof typeof ProfilerScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profilerId: 'profilerId'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const EmploymentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    companyName: 'companyName',
    companyDetails: 'companyDetails',
    myRole: 'myRole',
    summary: 'summary',
    tenure: 'tenure',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profilerId: 'profilerId'
  };

  export type EmploymentScalarFieldEnum = (typeof EmploymentScalarFieldEnum)[keyof typeof EmploymentScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    education: 'education',
    degreeName: 'degreeName',
    collegeName: 'collegeName',
    universityName: 'universityName',
    tenure: 'tenure',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profilerId: 'profilerId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    githubLink: 'githubLink',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl',
    websiteUrl: 'websiteUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profilerId: 'profilerId'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const AccomplishmentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccomplishmentsScalarFieldEnum = (typeof AccomplishmentsScalarFieldEnum)[keyof typeof AccomplishmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfilerWhereInput = {
    AND?: ProfilerWhereInput | ProfilerWhereInput[]
    OR?: ProfilerWhereInput[]
    NOT?: ProfilerWhereInput | ProfilerWhereInput[]
    id?: StringFilter<"Profiler"> | string
    firstName?: StringFilter<"Profiler"> | string
    middleName?: StringNullableFilter<"Profiler"> | string | null
    lastName?: StringNullableFilter<"Profiler"> | string | null
    email?: StringFilter<"Profiler"> | string
    avatar_url?: StringNullableFilter<"Profiler"> | string | null
    summary?: StringFilter<"Profiler"> | string
    dob?: StringNullableFilter<"Profiler"> | string | null
    createdAt?: DateTimeFilter<"Profiler"> | Date | string
    updatedAt?: DateTimeFilter<"Profiler"> | Date | string
    skills?: SkillsListRelationFilter
    employment?: EmploymentListRelationFilter
    education?: EducationListRelationFilter
    projects?: ProjectsListRelationFilter
  }

  export type ProfilerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    summary?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SkillsOrderByRelationAggregateInput
    employment?: EmploymentOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type ProfilerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfilerWhereInput | ProfilerWhereInput[]
    OR?: ProfilerWhereInput[]
    NOT?: ProfilerWhereInput | ProfilerWhereInput[]
    firstName?: StringFilter<"Profiler"> | string
    middleName?: StringNullableFilter<"Profiler"> | string | null
    lastName?: StringNullableFilter<"Profiler"> | string | null
    avatar_url?: StringNullableFilter<"Profiler"> | string | null
    summary?: StringFilter<"Profiler"> | string
    dob?: StringNullableFilter<"Profiler"> | string | null
    createdAt?: DateTimeFilter<"Profiler"> | Date | string
    updatedAt?: DateTimeFilter<"Profiler"> | Date | string
    skills?: SkillsListRelationFilter
    employment?: EmploymentListRelationFilter
    education?: EducationListRelationFilter
    projects?: ProjectsListRelationFilter
  }, "id" | "email">

  export type ProfilerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    summary?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfilerCountOrderByAggregateInput
    _max?: ProfilerMaxOrderByAggregateInput
    _min?: ProfilerMinOrderByAggregateInput
  }

  export type ProfilerScalarWhereWithAggregatesInput = {
    AND?: ProfilerScalarWhereWithAggregatesInput | ProfilerScalarWhereWithAggregatesInput[]
    OR?: ProfilerScalarWhereWithAggregatesInput[]
    NOT?: ProfilerScalarWhereWithAggregatesInput | ProfilerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profiler"> | string
    firstName?: StringWithAggregatesFilter<"Profiler"> | string
    middleName?: StringNullableWithAggregatesFilter<"Profiler"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Profiler"> | string | null
    email?: StringWithAggregatesFilter<"Profiler"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"Profiler"> | string | null
    summary?: StringWithAggregatesFilter<"Profiler"> | string
    dob?: StringNullableWithAggregatesFilter<"Profiler"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profiler"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profiler"> | Date | string
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: StringFilter<"Skills"> | string
    name?: StringFilter<"Skills"> | string
    rating?: FloatFilter<"Skills"> | number
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeFilter<"Skills"> | Date | string
    profilerId?: StringNullableFilter<"Skills"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    profiler?: ProfilerOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    name?: StringFilter<"Skills"> | string
    rating?: FloatFilter<"Skills"> | number
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeFilter<"Skills"> | Date | string
    profilerId?: StringNullableFilter<"Skills"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skills"> | string
    name?: StringWithAggregatesFilter<"Skills"> | string
    rating?: FloatWithAggregatesFilter<"Skills"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Skills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skills"> | Date | string
    profilerId?: StringNullableWithAggregatesFilter<"Skills"> | string | null
  }

  export type EmploymentWhereInput = {
    AND?: EmploymentWhereInput | EmploymentWhereInput[]
    OR?: EmploymentWhereInput[]
    NOT?: EmploymentWhereInput | EmploymentWhereInput[]
    id?: StringFilter<"Employment"> | string
    title?: StringFilter<"Employment"> | string
    companyName?: StringFilter<"Employment"> | string
    companyDetails?: StringNullableFilter<"Employment"> | string | null
    myRole?: StringFilter<"Employment"> | string
    summary?: StringNullableFilter<"Employment"> | string | null
    tenure?: DateTimeFilter<"Employment"> | Date | string
    createdAt?: DateTimeFilter<"Employment"> | Date | string
    updatedAt?: DateTimeFilter<"Employment"> | Date | string
    profilerId?: StringNullableFilter<"Employment"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }

  export type EmploymentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyDetails?: SortOrder
    myRole?: SortOrder
    summary?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    profiler?: ProfilerOrderByWithRelationInput
  }

  export type EmploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmploymentWhereInput | EmploymentWhereInput[]
    OR?: EmploymentWhereInput[]
    NOT?: EmploymentWhereInput | EmploymentWhereInput[]
    title?: StringFilter<"Employment"> | string
    companyName?: StringFilter<"Employment"> | string
    companyDetails?: StringNullableFilter<"Employment"> | string | null
    myRole?: StringFilter<"Employment"> | string
    summary?: StringNullableFilter<"Employment"> | string | null
    tenure?: DateTimeFilter<"Employment"> | Date | string
    createdAt?: DateTimeFilter<"Employment"> | Date | string
    updatedAt?: DateTimeFilter<"Employment"> | Date | string
    profilerId?: StringNullableFilter<"Employment"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }, "id">

  export type EmploymentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyDetails?: SortOrder
    myRole?: SortOrder
    summary?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    _count?: EmploymentCountOrderByAggregateInput
    _max?: EmploymentMaxOrderByAggregateInput
    _min?: EmploymentMinOrderByAggregateInput
  }

  export type EmploymentScalarWhereWithAggregatesInput = {
    AND?: EmploymentScalarWhereWithAggregatesInput | EmploymentScalarWhereWithAggregatesInput[]
    OR?: EmploymentScalarWhereWithAggregatesInput[]
    NOT?: EmploymentScalarWhereWithAggregatesInput | EmploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employment"> | string
    title?: StringWithAggregatesFilter<"Employment"> | string
    companyName?: StringWithAggregatesFilter<"Employment"> | string
    companyDetails?: StringNullableWithAggregatesFilter<"Employment"> | string | null
    myRole?: StringWithAggregatesFilter<"Employment"> | string
    summary?: StringNullableWithAggregatesFilter<"Employment"> | string | null
    tenure?: DateTimeWithAggregatesFilter<"Employment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Employment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employment"> | Date | string
    profilerId?: StringNullableWithAggregatesFilter<"Employment"> | string | null
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    education?: StringFilter<"Education"> | string
    degreeName?: StringFilter<"Education"> | string
    collegeName?: StringFilter<"Education"> | string
    universityName?: StringFilter<"Education"> | string
    tenure?: DateTimeFilter<"Education"> | Date | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    profilerId?: StringNullableFilter<"Education"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    education?: SortOrder
    degreeName?: SortOrder
    collegeName?: SortOrder
    universityName?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    profiler?: ProfilerOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    education?: StringFilter<"Education"> | string
    degreeName?: StringFilter<"Education"> | string
    collegeName?: StringFilter<"Education"> | string
    universityName?: StringFilter<"Education"> | string
    tenure?: DateTimeFilter<"Education"> | Date | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    profilerId?: StringNullableFilter<"Education"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    education?: SortOrder
    degreeName?: SortOrder
    collegeName?: SortOrder
    universityName?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    education?: StringWithAggregatesFilter<"Education"> | string
    degreeName?: StringWithAggregatesFilter<"Education"> | string
    collegeName?: StringWithAggregatesFilter<"Education"> | string
    universityName?: StringWithAggregatesFilter<"Education"> | string
    tenure?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    profilerId?: StringNullableWithAggregatesFilter<"Education"> | string | null
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    githubLink?: StringNullableFilter<"Projects"> | string | null
    videoUrl?: StringNullableFilter<"Projects"> | string | null
    thumbnailUrl?: StringNullableFilter<"Projects"> | string | null
    websiteUrl?: StringNullableListFilter<"Projects">
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
    profilerId?: StringNullableFilter<"Projects"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubLink?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    websiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    profiler?: ProfilerOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    githubLink?: StringNullableFilter<"Projects"> | string | null
    videoUrl?: StringNullableFilter<"Projects"> | string | null
    thumbnailUrl?: StringNullableFilter<"Projects"> | string | null
    websiteUrl?: StringNullableListFilter<"Projects">
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
    profilerId?: StringNullableFilter<"Projects"> | string | null
    profiler?: XOR<ProfilerNullableScalarRelationFilter, ProfilerWhereInput> | null
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubLink?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    websiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projects"> | string
    title?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringWithAggregatesFilter<"Projects"> | string
    githubLink?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    websiteUrl?: StringNullableListFilter<"Projects">
    createdAt?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    profilerId?: StringNullableWithAggregatesFilter<"Projects"> | string | null
  }

  export type AccomplishmentsWhereInput = {
    AND?: AccomplishmentsWhereInput | AccomplishmentsWhereInput[]
    OR?: AccomplishmentsWhereInput[]
    NOT?: AccomplishmentsWhereInput | AccomplishmentsWhereInput[]
    id?: StringFilter<"Accomplishments"> | string
    title?: StringFilter<"Accomplishments"> | string
    description?: StringFilter<"Accomplishments"> | string
    createdAt?: DateTimeFilter<"Accomplishments"> | Date | string
    updatedAt?: DateTimeFilter<"Accomplishments"> | Date | string
  }

  export type AccomplishmentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccomplishmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccomplishmentsWhereInput | AccomplishmentsWhereInput[]
    OR?: AccomplishmentsWhereInput[]
    NOT?: AccomplishmentsWhereInput | AccomplishmentsWhereInput[]
    title?: StringFilter<"Accomplishments"> | string
    description?: StringFilter<"Accomplishments"> | string
    createdAt?: DateTimeFilter<"Accomplishments"> | Date | string
    updatedAt?: DateTimeFilter<"Accomplishments"> | Date | string
  }, "id">

  export type AccomplishmentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccomplishmentsCountOrderByAggregateInput
    _max?: AccomplishmentsMaxOrderByAggregateInput
    _min?: AccomplishmentsMinOrderByAggregateInput
  }

  export type AccomplishmentsScalarWhereWithAggregatesInput = {
    AND?: AccomplishmentsScalarWhereWithAggregatesInput | AccomplishmentsScalarWhereWithAggregatesInput[]
    OR?: AccomplishmentsScalarWhereWithAggregatesInput[]
    NOT?: AccomplishmentsScalarWhereWithAggregatesInput | AccomplishmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accomplishments"> | string
    title?: StringWithAggregatesFilter<"Accomplishments"> | string
    description?: StringWithAggregatesFilter<"Accomplishments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Accomplishments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accomplishments"> | Date | string
  }

  export type ProfilerCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsCreateNestedManyWithoutProfilerInput
    employment?: EmploymentCreateNestedManyWithoutProfilerInput
    education?: EducationCreateNestedManyWithoutProfilerInput
    projects?: ProjectsCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUncheckedCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsUncheckedCreateNestedManyWithoutProfilerInput
    employment?: EmploymentUncheckedCreateNestedManyWithoutProfilerInput
    education?: EducationUncheckedCreateNestedManyWithoutProfilerInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUpdateManyWithoutProfilerNestedInput
    education?: EducationUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUncheckedUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUncheckedUpdateManyWithoutProfilerNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerCreateManyInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilerUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillsCreateInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiler?: ProfilerCreateNestedOneWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type SkillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiler?: ProfilerUpdateOneWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillsCreateManyInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type SkillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentCreateInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profiler?: ProfilerCreateNestedOneWithoutEmploymentInput
  }

  export type EmploymentUncheckedCreateInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type EmploymentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiler?: ProfilerUpdateOneWithoutEmploymentNestedInput
  }

  export type EmploymentUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentCreateManyInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type EmploymentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmploymentUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profiler?: ProfilerCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type EducationUpdateInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiler?: ProfilerUpdateOneWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateManyInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type EducationUpdateManyMutationInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectsCreateInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    profiler?: ProfilerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type ProjectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiler?: ProfilerUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectsCreateManyInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    profilerId?: string | null
  }

  export type ProjectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccomplishmentsCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccomplishmentsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccomplishmentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccomplishmentsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccomplishmentsCreateManyInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccomplishmentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccomplishmentsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SkillsListRelationFilter = {
    every?: SkillsWhereInput
    some?: SkillsWhereInput
    none?: SkillsWhereInput
  }

  export type EmploymentListRelationFilter = {
    every?: EmploymentWhereInput
    some?: EmploymentWhereInput
    none?: EmploymentWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type SkillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    summary?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    summary?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    summary?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfilerNullableScalarRelationFilter = {
    is?: ProfilerWhereInput | null
    isNot?: ProfilerWhereInput | null
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type SkillsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmploymentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyDetails?: SortOrder
    myRole?: SortOrder
    summary?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type EmploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyDetails?: SortOrder
    myRole?: SortOrder
    summary?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type EmploymentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyDetails?: SortOrder
    myRole?: SortOrder
    summary?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    degreeName?: SortOrder
    collegeName?: SortOrder
    universityName?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    degreeName?: SortOrder
    collegeName?: SortOrder
    universityName?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    degreeName?: SortOrder
    collegeName?: SortOrder
    universityName?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubLink?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    websiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubLink?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubLink?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilerId?: SortOrder
  }

  export type AccomplishmentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccomplishmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccomplishmentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillsCreateNestedManyWithoutProfilerInput = {
    create?: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput> | SkillsCreateWithoutProfilerInput[] | SkillsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutProfilerInput | SkillsCreateOrConnectWithoutProfilerInput[]
    createMany?: SkillsCreateManyProfilerInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type EmploymentCreateNestedManyWithoutProfilerInput = {
    create?: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput> | EmploymentCreateWithoutProfilerInput[] | EmploymentUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EmploymentCreateOrConnectWithoutProfilerInput | EmploymentCreateOrConnectWithoutProfilerInput[]
    createMany?: EmploymentCreateManyProfilerInputEnvelope
    connect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutProfilerInput = {
    create?: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput> | EducationCreateWithoutProfilerInput[] | EducationUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfilerInput | EducationCreateOrConnectWithoutProfilerInput[]
    createMany?: EducationCreateManyProfilerInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectsCreateNestedManyWithoutProfilerInput = {
    create?: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput> | ProjectsCreateWithoutProfilerInput[] | ProjectsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutProfilerInput | ProjectsCreateOrConnectWithoutProfilerInput[]
    createMany?: ProjectsCreateManyProfilerInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type SkillsUncheckedCreateNestedManyWithoutProfilerInput = {
    create?: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput> | SkillsCreateWithoutProfilerInput[] | SkillsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutProfilerInput | SkillsCreateOrConnectWithoutProfilerInput[]
    createMany?: SkillsCreateManyProfilerInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type EmploymentUncheckedCreateNestedManyWithoutProfilerInput = {
    create?: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput> | EmploymentCreateWithoutProfilerInput[] | EmploymentUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EmploymentCreateOrConnectWithoutProfilerInput | EmploymentCreateOrConnectWithoutProfilerInput[]
    createMany?: EmploymentCreateManyProfilerInputEnvelope
    connect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutProfilerInput = {
    create?: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput> | EducationCreateWithoutProfilerInput[] | EducationUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfilerInput | EducationCreateOrConnectWithoutProfilerInput[]
    createMany?: EducationCreateManyProfilerInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutProfilerInput = {
    create?: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput> | ProjectsCreateWithoutProfilerInput[] | ProjectsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutProfilerInput | ProjectsCreateOrConnectWithoutProfilerInput[]
    createMany?: ProjectsCreateManyProfilerInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SkillsUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput> | SkillsCreateWithoutProfilerInput[] | SkillsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutProfilerInput | SkillsCreateOrConnectWithoutProfilerInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutProfilerInput | SkillsUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: SkillsCreateManyProfilerInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutProfilerInput | SkillsUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutProfilerInput | SkillsUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type EmploymentUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput> | EmploymentCreateWithoutProfilerInput[] | EmploymentUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EmploymentCreateOrConnectWithoutProfilerInput | EmploymentCreateOrConnectWithoutProfilerInput[]
    upsert?: EmploymentUpsertWithWhereUniqueWithoutProfilerInput | EmploymentUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: EmploymentCreateManyProfilerInputEnvelope
    set?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    disconnect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    delete?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    connect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    update?: EmploymentUpdateWithWhereUniqueWithoutProfilerInput | EmploymentUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: EmploymentUpdateManyWithWhereWithoutProfilerInput | EmploymentUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: EmploymentScalarWhereInput | EmploymentScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput> | EducationCreateWithoutProfilerInput[] | EducationUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfilerInput | EducationCreateOrConnectWithoutProfilerInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfilerInput | EducationUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: EducationCreateManyProfilerInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfilerInput | EducationUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfilerInput | EducationUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectsUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput> | ProjectsCreateWithoutProfilerInput[] | ProjectsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutProfilerInput | ProjectsCreateOrConnectWithoutProfilerInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutProfilerInput | ProjectsUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: ProjectsCreateManyProfilerInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutProfilerInput | ProjectsUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutProfilerInput | ProjectsUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type SkillsUncheckedUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput> | SkillsCreateWithoutProfilerInput[] | SkillsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutProfilerInput | SkillsCreateOrConnectWithoutProfilerInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutProfilerInput | SkillsUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: SkillsCreateManyProfilerInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutProfilerInput | SkillsUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutProfilerInput | SkillsUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type EmploymentUncheckedUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput> | EmploymentCreateWithoutProfilerInput[] | EmploymentUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EmploymentCreateOrConnectWithoutProfilerInput | EmploymentCreateOrConnectWithoutProfilerInput[]
    upsert?: EmploymentUpsertWithWhereUniqueWithoutProfilerInput | EmploymentUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: EmploymentCreateManyProfilerInputEnvelope
    set?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    disconnect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    delete?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    connect?: EmploymentWhereUniqueInput | EmploymentWhereUniqueInput[]
    update?: EmploymentUpdateWithWhereUniqueWithoutProfilerInput | EmploymentUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: EmploymentUpdateManyWithWhereWithoutProfilerInput | EmploymentUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: EmploymentScalarWhereInput | EmploymentScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput> | EducationCreateWithoutProfilerInput[] | EducationUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfilerInput | EducationCreateOrConnectWithoutProfilerInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfilerInput | EducationUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: EducationCreateManyProfilerInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfilerInput | EducationUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfilerInput | EducationUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutProfilerNestedInput = {
    create?: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput> | ProjectsCreateWithoutProfilerInput[] | ProjectsUncheckedCreateWithoutProfilerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutProfilerInput | ProjectsCreateOrConnectWithoutProfilerInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutProfilerInput | ProjectsUpsertWithWhereUniqueWithoutProfilerInput[]
    createMany?: ProjectsCreateManyProfilerInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutProfilerInput | ProjectsUpdateWithWhereUniqueWithoutProfilerInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutProfilerInput | ProjectsUpdateManyWithWhereWithoutProfilerInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProfilerCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ProfilerCreateWithoutSkillsInput, ProfilerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutSkillsInput
    connect?: ProfilerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfilerUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<ProfilerCreateWithoutSkillsInput, ProfilerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutSkillsInput
    upsert?: ProfilerUpsertWithoutSkillsInput
    disconnect?: boolean
    delete?: ProfilerWhereInput | boolean
    connect?: ProfilerWhereUniqueInput
    update?: XOR<XOR<ProfilerUpdateToOneWithWhereWithoutSkillsInput, ProfilerUpdateWithoutSkillsInput>, ProfilerUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfilerCreateNestedOneWithoutEmploymentInput = {
    create?: XOR<ProfilerCreateWithoutEmploymentInput, ProfilerUncheckedCreateWithoutEmploymentInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutEmploymentInput
    connect?: ProfilerWhereUniqueInput
  }

  export type ProfilerUpdateOneWithoutEmploymentNestedInput = {
    create?: XOR<ProfilerCreateWithoutEmploymentInput, ProfilerUncheckedCreateWithoutEmploymentInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutEmploymentInput
    upsert?: ProfilerUpsertWithoutEmploymentInput
    disconnect?: boolean
    delete?: ProfilerWhereInput | boolean
    connect?: ProfilerWhereUniqueInput
    update?: XOR<XOR<ProfilerUpdateToOneWithWhereWithoutEmploymentInput, ProfilerUpdateWithoutEmploymentInput>, ProfilerUncheckedUpdateWithoutEmploymentInput>
  }

  export type ProfilerCreateNestedOneWithoutEducationInput = {
    create?: XOR<ProfilerCreateWithoutEducationInput, ProfilerUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutEducationInput
    connect?: ProfilerWhereUniqueInput
  }

  export type ProfilerUpdateOneWithoutEducationNestedInput = {
    create?: XOR<ProfilerCreateWithoutEducationInput, ProfilerUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutEducationInput
    upsert?: ProfilerUpsertWithoutEducationInput
    disconnect?: boolean
    delete?: ProfilerWhereInput | boolean
    connect?: ProfilerWhereUniqueInput
    update?: XOR<XOR<ProfilerUpdateToOneWithWhereWithoutEducationInput, ProfilerUpdateWithoutEducationInput>, ProfilerUncheckedUpdateWithoutEducationInput>
  }

  export type ProjectsCreatewebsiteUrlInput = {
    set: string[]
  }

  export type ProfilerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProfilerCreateWithoutProjectsInput, ProfilerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutProjectsInput
    connect?: ProfilerWhereUniqueInput
  }

  export type ProjectsUpdatewebsiteUrlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfilerUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<ProfilerCreateWithoutProjectsInput, ProfilerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProfilerCreateOrConnectWithoutProjectsInput
    upsert?: ProfilerUpsertWithoutProjectsInput
    disconnect?: boolean
    delete?: ProfilerWhereInput | boolean
    connect?: ProfilerWhereUniqueInput
    update?: XOR<XOR<ProfilerUpdateToOneWithWhereWithoutProjectsInput, ProfilerUpdateWithoutProjectsInput>, ProfilerUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SkillsCreateWithoutProfilerInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillsUncheckedCreateWithoutProfilerInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillsCreateOrConnectWithoutProfilerInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput>
  }

  export type SkillsCreateManyProfilerInputEnvelope = {
    data: SkillsCreateManyProfilerInput | SkillsCreateManyProfilerInput[]
  }

  export type EmploymentCreateWithoutProfilerInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmploymentUncheckedCreateWithoutProfilerInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmploymentCreateOrConnectWithoutProfilerInput = {
    where: EmploymentWhereUniqueInput
    create: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput>
  }

  export type EmploymentCreateManyProfilerInputEnvelope = {
    data: EmploymentCreateManyProfilerInput | EmploymentCreateManyProfilerInput[]
  }

  export type EducationCreateWithoutProfilerInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutProfilerInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutProfilerInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput>
  }

  export type EducationCreateManyProfilerInputEnvelope = {
    data: EducationCreateManyProfilerInput | EducationCreateManyProfilerInput[]
  }

  export type ProjectsCreateWithoutProfilerInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectsUncheckedCreateWithoutProfilerInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectsCreateOrConnectWithoutProfilerInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput>
  }

  export type ProjectsCreateManyProfilerInputEnvelope = {
    data: ProjectsCreateManyProfilerInput | ProjectsCreateManyProfilerInput[]
  }

  export type SkillsUpsertWithWhereUniqueWithoutProfilerInput = {
    where: SkillsWhereUniqueInput
    update: XOR<SkillsUpdateWithoutProfilerInput, SkillsUncheckedUpdateWithoutProfilerInput>
    create: XOR<SkillsCreateWithoutProfilerInput, SkillsUncheckedCreateWithoutProfilerInput>
  }

  export type SkillsUpdateWithWhereUniqueWithoutProfilerInput = {
    where: SkillsWhereUniqueInput
    data: XOR<SkillsUpdateWithoutProfilerInput, SkillsUncheckedUpdateWithoutProfilerInput>
  }

  export type SkillsUpdateManyWithWhereWithoutProfilerInput = {
    where: SkillsScalarWhereInput
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyWithoutProfilerInput>
  }

  export type SkillsScalarWhereInput = {
    AND?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    OR?: SkillsScalarWhereInput[]
    NOT?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    id?: StringFilter<"Skills"> | string
    name?: StringFilter<"Skills"> | string
    rating?: FloatFilter<"Skills"> | number
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeFilter<"Skills"> | Date | string
    profilerId?: StringNullableFilter<"Skills"> | string | null
  }

  export type EmploymentUpsertWithWhereUniqueWithoutProfilerInput = {
    where: EmploymentWhereUniqueInput
    update: XOR<EmploymentUpdateWithoutProfilerInput, EmploymentUncheckedUpdateWithoutProfilerInput>
    create: XOR<EmploymentCreateWithoutProfilerInput, EmploymentUncheckedCreateWithoutProfilerInput>
  }

  export type EmploymentUpdateWithWhereUniqueWithoutProfilerInput = {
    where: EmploymentWhereUniqueInput
    data: XOR<EmploymentUpdateWithoutProfilerInput, EmploymentUncheckedUpdateWithoutProfilerInput>
  }

  export type EmploymentUpdateManyWithWhereWithoutProfilerInput = {
    where: EmploymentScalarWhereInput
    data: XOR<EmploymentUpdateManyMutationInput, EmploymentUncheckedUpdateManyWithoutProfilerInput>
  }

  export type EmploymentScalarWhereInput = {
    AND?: EmploymentScalarWhereInput | EmploymentScalarWhereInput[]
    OR?: EmploymentScalarWhereInput[]
    NOT?: EmploymentScalarWhereInput | EmploymentScalarWhereInput[]
    id?: StringFilter<"Employment"> | string
    title?: StringFilter<"Employment"> | string
    companyName?: StringFilter<"Employment"> | string
    companyDetails?: StringNullableFilter<"Employment"> | string | null
    myRole?: StringFilter<"Employment"> | string
    summary?: StringNullableFilter<"Employment"> | string | null
    tenure?: DateTimeFilter<"Employment"> | Date | string
    createdAt?: DateTimeFilter<"Employment"> | Date | string
    updatedAt?: DateTimeFilter<"Employment"> | Date | string
    profilerId?: StringNullableFilter<"Employment"> | string | null
  }

  export type EducationUpsertWithWhereUniqueWithoutProfilerInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutProfilerInput, EducationUncheckedUpdateWithoutProfilerInput>
    create: XOR<EducationCreateWithoutProfilerInput, EducationUncheckedCreateWithoutProfilerInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutProfilerInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutProfilerInput, EducationUncheckedUpdateWithoutProfilerInput>
  }

  export type EducationUpdateManyWithWhereWithoutProfilerInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutProfilerInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    education?: StringFilter<"Education"> | string
    degreeName?: StringFilter<"Education"> | string
    collegeName?: StringFilter<"Education"> | string
    universityName?: StringFilter<"Education"> | string
    tenure?: DateTimeFilter<"Education"> | Date | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    profilerId?: StringNullableFilter<"Education"> | string | null
  }

  export type ProjectsUpsertWithWhereUniqueWithoutProfilerInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutProfilerInput, ProjectsUncheckedUpdateWithoutProfilerInput>
    create: XOR<ProjectsCreateWithoutProfilerInput, ProjectsUncheckedCreateWithoutProfilerInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutProfilerInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutProfilerInput, ProjectsUncheckedUpdateWithoutProfilerInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutProfilerInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutProfilerInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    githubLink?: StringNullableFilter<"Projects"> | string | null
    videoUrl?: StringNullableFilter<"Projects"> | string | null
    thumbnailUrl?: StringNullableFilter<"Projects"> | string | null
    websiteUrl?: StringNullableListFilter<"Projects">
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
    profilerId?: StringNullableFilter<"Projects"> | string | null
  }

  export type ProfilerCreateWithoutSkillsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employment?: EmploymentCreateNestedManyWithoutProfilerInput
    education?: EducationCreateNestedManyWithoutProfilerInput
    projects?: ProjectsCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUncheckedCreateWithoutSkillsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employment?: EmploymentUncheckedCreateNestedManyWithoutProfilerInput
    education?: EducationUncheckedCreateNestedManyWithoutProfilerInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerCreateOrConnectWithoutSkillsInput = {
    where: ProfilerWhereUniqueInput
    create: XOR<ProfilerCreateWithoutSkillsInput, ProfilerUncheckedCreateWithoutSkillsInput>
  }

  export type ProfilerUpsertWithoutSkillsInput = {
    update: XOR<ProfilerUpdateWithoutSkillsInput, ProfilerUncheckedUpdateWithoutSkillsInput>
    create: XOR<ProfilerCreateWithoutSkillsInput, ProfilerUncheckedCreateWithoutSkillsInput>
    where?: ProfilerWhereInput
  }

  export type ProfilerUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ProfilerWhereInput
    data: XOR<ProfilerUpdateWithoutSkillsInput, ProfilerUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfilerUpdateWithoutSkillsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employment?: EmploymentUpdateManyWithoutProfilerNestedInput
    education?: EducationUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerUncheckedUpdateWithoutSkillsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employment?: EmploymentUncheckedUpdateManyWithoutProfilerNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerCreateWithoutEmploymentInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsCreateNestedManyWithoutProfilerInput
    education?: EducationCreateNestedManyWithoutProfilerInput
    projects?: ProjectsCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUncheckedCreateWithoutEmploymentInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsUncheckedCreateNestedManyWithoutProfilerInput
    education?: EducationUncheckedCreateNestedManyWithoutProfilerInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerCreateOrConnectWithoutEmploymentInput = {
    where: ProfilerWhereUniqueInput
    create: XOR<ProfilerCreateWithoutEmploymentInput, ProfilerUncheckedCreateWithoutEmploymentInput>
  }

  export type ProfilerUpsertWithoutEmploymentInput = {
    update: XOR<ProfilerUpdateWithoutEmploymentInput, ProfilerUncheckedUpdateWithoutEmploymentInput>
    create: XOR<ProfilerCreateWithoutEmploymentInput, ProfilerUncheckedCreateWithoutEmploymentInput>
    where?: ProfilerWhereInput
  }

  export type ProfilerUpdateToOneWithWhereWithoutEmploymentInput = {
    where?: ProfilerWhereInput
    data: XOR<ProfilerUpdateWithoutEmploymentInput, ProfilerUncheckedUpdateWithoutEmploymentInput>
  }

  export type ProfilerUpdateWithoutEmploymentInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUpdateManyWithoutProfilerNestedInput
    education?: EducationUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerUncheckedUpdateWithoutEmploymentInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUncheckedUpdateManyWithoutProfilerNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerCreateWithoutEducationInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsCreateNestedManyWithoutProfilerInput
    employment?: EmploymentCreateNestedManyWithoutProfilerInput
    projects?: ProjectsCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUncheckedCreateWithoutEducationInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsUncheckedCreateNestedManyWithoutProfilerInput
    employment?: EmploymentUncheckedCreateNestedManyWithoutProfilerInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerCreateOrConnectWithoutEducationInput = {
    where: ProfilerWhereUniqueInput
    create: XOR<ProfilerCreateWithoutEducationInput, ProfilerUncheckedCreateWithoutEducationInput>
  }

  export type ProfilerUpsertWithoutEducationInput = {
    update: XOR<ProfilerUpdateWithoutEducationInput, ProfilerUncheckedUpdateWithoutEducationInput>
    create: XOR<ProfilerCreateWithoutEducationInput, ProfilerUncheckedCreateWithoutEducationInput>
    where?: ProfilerWhereInput
  }

  export type ProfilerUpdateToOneWithWhereWithoutEducationInput = {
    where?: ProfilerWhereInput
    data: XOR<ProfilerUpdateWithoutEducationInput, ProfilerUncheckedUpdateWithoutEducationInput>
  }

  export type ProfilerUpdateWithoutEducationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerUncheckedUpdateWithoutEducationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUncheckedUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUncheckedUpdateManyWithoutProfilerNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerCreateWithoutProjectsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsCreateNestedManyWithoutProfilerInput
    employment?: EmploymentCreateNestedManyWithoutProfilerInput
    education?: EducationCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerUncheckedCreateWithoutProjectsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    email: string
    avatar_url?: string | null
    summary: string
    dob?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillsUncheckedCreateNestedManyWithoutProfilerInput
    employment?: EmploymentUncheckedCreateNestedManyWithoutProfilerInput
    education?: EducationUncheckedCreateNestedManyWithoutProfilerInput
  }

  export type ProfilerCreateOrConnectWithoutProjectsInput = {
    where: ProfilerWhereUniqueInput
    create: XOR<ProfilerCreateWithoutProjectsInput, ProfilerUncheckedCreateWithoutProjectsInput>
  }

  export type ProfilerUpsertWithoutProjectsInput = {
    update: XOR<ProfilerUpdateWithoutProjectsInput, ProfilerUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProfilerCreateWithoutProjectsInput, ProfilerUncheckedCreateWithoutProjectsInput>
    where?: ProfilerWhereInput
  }

  export type ProfilerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProfilerWhereInput
    data: XOR<ProfilerUpdateWithoutProjectsInput, ProfilerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProfilerUpdateWithoutProjectsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUpdateManyWithoutProfilerNestedInput
    education?: EducationUpdateManyWithoutProfilerNestedInput
  }

  export type ProfilerUncheckedUpdateWithoutProjectsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillsUncheckedUpdateManyWithoutProfilerNestedInput
    employment?: EmploymentUncheckedUpdateManyWithoutProfilerNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfilerNestedInput
  }

  export type SkillsCreateManyProfilerInput = {
    id?: string
    name: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmploymentCreateManyProfilerInput = {
    id?: string
    title: string
    companyName: string
    companyDetails?: string | null
    myRole: string
    summary?: string | null
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateManyProfilerInput = {
    id?: string
    education: string
    degreeName: string
    collegeName: string
    universityName: string
    tenure: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectsCreateManyProfilerInput = {
    id?: string
    title: string
    description: string
    githubLink?: string | null
    videoUrl?: string | null
    thumbnailUrl?: string | null
    websiteUrl?: ProjectsCreatewebsiteUrlInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillsUpdateWithoutProfilerInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillsUncheckedUpdateWithoutProfilerInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillsUncheckedUpdateManyWithoutProfilerInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmploymentUpdateWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmploymentUncheckedUpdateWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmploymentUncheckedUpdateManyWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDetails?: NullableStringFieldUpdateOperationsInput | string | null
    myRole?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutProfilerInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutProfilerInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutProfilerInput = {
    education?: StringFieldUpdateOperationsInput | string
    degreeName?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    universityName?: StringFieldUpdateOperationsInput | string
    tenure?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUpdateWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateManyWithoutProfilerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: ProjectsUpdatewebsiteUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}