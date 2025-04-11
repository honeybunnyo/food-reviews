
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
 * Model RecipeUpload
 * 
 */
export type RecipeUpload = $Result.DefaultSelection<Prisma.$RecipeUploadPayload>
/**
 * Model RestaurantUpload
 * 
 */
export type RestaurantUpload = $Result.DefaultSelection<Prisma.$RestaurantUploadPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RecipeUploads
 * const recipeUploads = await prisma.recipeUpload.findMany()
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
   * // Fetch zero or more RecipeUploads
   * const recipeUploads = await prisma.recipeUpload.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.recipeUpload`: Exposes CRUD operations for the **RecipeUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeUploads
    * const recipeUploads = await prisma.recipeUpload.findMany()
    * ```
    */
  get recipeUpload(): Prisma.RecipeUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantUpload`: Exposes CRUD operations for the **RestaurantUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantUploads
    * const restaurantUploads = await prisma.restaurantUpload.findMany()
    * ```
    */
  get restaurantUpload(): Prisma.RestaurantUploadDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    RecipeUpload: 'RecipeUpload',
    RestaurantUpload: 'RestaurantUpload'
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
      modelProps: "recipeUpload" | "restaurantUpload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RecipeUpload: {
        payload: Prisma.$RecipeUploadPayload<ExtArgs>
        fields: Prisma.RecipeUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          findFirst: {
            args: Prisma.RecipeUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          findMany: {
            args: Prisma.RecipeUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>[]
          }
          create: {
            args: Prisma.RecipeUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          createMany: {
            args: Prisma.RecipeUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>[]
          }
          delete: {
            args: Prisma.RecipeUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          update: {
            args: Prisma.RecipeUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          deleteMany: {
            args: Prisma.RecipeUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>[]
          }
          upsert: {
            args: Prisma.RecipeUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUploadPayload>
          }
          aggregate: {
            args: Prisma.RecipeUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeUpload>
          }
          groupBy: {
            args: Prisma.RecipeUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeUploadCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeUploadCountAggregateOutputType> | number
          }
        }
      }
      RestaurantUpload: {
        payload: Prisma.$RestaurantUploadPayload<ExtArgs>
        fields: Prisma.RestaurantUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          findFirst: {
            args: Prisma.RestaurantUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          findMany: {
            args: Prisma.RestaurantUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>[]
          }
          create: {
            args: Prisma.RestaurantUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          createMany: {
            args: Prisma.RestaurantUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>[]
          }
          delete: {
            args: Prisma.RestaurantUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          update: {
            args: Prisma.RestaurantUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantUploadPayload>
          }
          aggregate: {
            args: Prisma.RestaurantUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantUpload>
          }
          groupBy: {
            args: Prisma.RestaurantUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantUploadCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantUploadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    recipeUpload?: RecipeUploadOmit
    restaurantUpload?: RestaurantUploadOmit
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
   * Models
   */

  /**
   * Model RecipeUpload
   */

  export type AggregateRecipeUpload = {
    _count: RecipeUploadCountAggregateOutputType | null
    _avg: RecipeUploadAvgAggregateOutputType | null
    _sum: RecipeUploadSumAggregateOutputType | null
    _min: RecipeUploadMinAggregateOutputType | null
    _max: RecipeUploadMaxAggregateOutputType | null
  }

  export type RecipeUploadAvgAggregateOutputType = {
    rating: number | null
  }

  export type RecipeUploadSumAggregateOutputType = {
    rating: number | null
  }

  export type RecipeUploadMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    recipe: string | null
    method: string | null
    rating: number | null
  }

  export type RecipeUploadMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    recipe: string | null
    method: string | null
    rating: number | null
  }

  export type RecipeUploadCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    description: number
    recipe: number
    method: number
    rating: number
    _all: number
  }


  export type RecipeUploadAvgAggregateInputType = {
    rating?: true
  }

  export type RecipeUploadSumAggregateInputType = {
    rating?: true
  }

  export type RecipeUploadMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    recipe?: true
    method?: true
    rating?: true
  }

  export type RecipeUploadMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    recipe?: true
    method?: true
    rating?: true
  }

  export type RecipeUploadCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    recipe?: true
    method?: true
    rating?: true
    _all?: true
  }

  export type RecipeUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeUpload to aggregate.
     */
    where?: RecipeUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUploads to fetch.
     */
    orderBy?: RecipeUploadOrderByWithRelationInput | RecipeUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeUploads
    **/
    _count?: true | RecipeUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeUploadMaxAggregateInputType
  }

  export type GetRecipeUploadAggregateType<T extends RecipeUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeUpload[P]>
      : GetScalarType<T[P], AggregateRecipeUpload[P]>
  }




  export type RecipeUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeUploadWhereInput
    orderBy?: RecipeUploadOrderByWithAggregationInput | RecipeUploadOrderByWithAggregationInput[]
    by: RecipeUploadScalarFieldEnum[] | RecipeUploadScalarFieldEnum
    having?: RecipeUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeUploadCountAggregateInputType | true
    _avg?: RecipeUploadAvgAggregateInputType
    _sum?: RecipeUploadSumAggregateInputType
    _min?: RecipeUploadMinAggregateInputType
    _max?: RecipeUploadMaxAggregateInputType
  }

  export type RecipeUploadGroupByOutputType = {
    id: string
    created_at: Date
    title: string
    description: string
    recipe: string
    method: string
    rating: number
    _count: RecipeUploadCountAggregateOutputType | null
    _avg: RecipeUploadAvgAggregateOutputType | null
    _sum: RecipeUploadSumAggregateOutputType | null
    _min: RecipeUploadMinAggregateOutputType | null
    _max: RecipeUploadMaxAggregateOutputType | null
  }

  type GetRecipeUploadGroupByPayload<T extends RecipeUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeUploadGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeUploadGroupByOutputType[P]>
        }
      >
    >


  export type RecipeUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    recipe?: boolean
    method?: boolean
    rating?: boolean
  }, ExtArgs["result"]["recipeUpload"]>

  export type RecipeUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    recipe?: boolean
    method?: boolean
    rating?: boolean
  }, ExtArgs["result"]["recipeUpload"]>

  export type RecipeUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    recipe?: boolean
    method?: boolean
    rating?: boolean
  }, ExtArgs["result"]["recipeUpload"]>

  export type RecipeUploadSelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    recipe?: boolean
    method?: boolean
    rating?: boolean
  }

  export type RecipeUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title" | "description" | "recipe" | "method" | "rating", ExtArgs["result"]["recipeUpload"]>

  export type $RecipeUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeUpload"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      title: string
      description: string
      recipe: string
      method: string
      rating: number
    }, ExtArgs["result"]["recipeUpload"]>
    composites: {}
  }

  type RecipeUploadGetPayload<S extends boolean | null | undefined | RecipeUploadDefaultArgs> = $Result.GetResult<Prisma.$RecipeUploadPayload, S>

  type RecipeUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeUploadCountAggregateInputType | true
    }

  export interface RecipeUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeUpload'], meta: { name: 'RecipeUpload' } }
    /**
     * Find zero or one RecipeUpload that matches the filter.
     * @param {RecipeUploadFindUniqueArgs} args - Arguments to find a RecipeUpload
     * @example
     * // Get one RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeUploadFindUniqueArgs>(args: SelectSubset<T, RecipeUploadFindUniqueArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeUploadFindUniqueOrThrowArgs} args - Arguments to find a RecipeUpload
     * @example
     * // Get one RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadFindFirstArgs} args - Arguments to find a RecipeUpload
     * @example
     * // Get one RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeUploadFindFirstArgs>(args?: SelectSubset<T, RecipeUploadFindFirstArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadFindFirstOrThrowArgs} args - Arguments to find a RecipeUpload
     * @example
     * // Get one RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeUploads
     * const recipeUploads = await prisma.recipeUpload.findMany()
     * 
     * // Get first 10 RecipeUploads
     * const recipeUploads = await prisma.recipeUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeUploadWithIdOnly = await prisma.recipeUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeUploadFindManyArgs>(args?: SelectSubset<T, RecipeUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeUpload.
     * @param {RecipeUploadCreateArgs} args - Arguments to create a RecipeUpload.
     * @example
     * // Create one RecipeUpload
     * const RecipeUpload = await prisma.recipeUpload.create({
     *   data: {
     *     // ... data to create a RecipeUpload
     *   }
     * })
     * 
     */
    create<T extends RecipeUploadCreateArgs>(args: SelectSubset<T, RecipeUploadCreateArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeUploads.
     * @param {RecipeUploadCreateManyArgs} args - Arguments to create many RecipeUploads.
     * @example
     * // Create many RecipeUploads
     * const recipeUpload = await prisma.recipeUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeUploadCreateManyArgs>(args?: SelectSubset<T, RecipeUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeUploads and returns the data saved in the database.
     * @param {RecipeUploadCreateManyAndReturnArgs} args - Arguments to create many RecipeUploads.
     * @example
     * // Create many RecipeUploads
     * const recipeUpload = await prisma.recipeUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeUploads and only return the `id`
     * const recipeUploadWithIdOnly = await prisma.recipeUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeUpload.
     * @param {RecipeUploadDeleteArgs} args - Arguments to delete one RecipeUpload.
     * @example
     * // Delete one RecipeUpload
     * const RecipeUpload = await prisma.recipeUpload.delete({
     *   where: {
     *     // ... filter to delete one RecipeUpload
     *   }
     * })
     * 
     */
    delete<T extends RecipeUploadDeleteArgs>(args: SelectSubset<T, RecipeUploadDeleteArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeUpload.
     * @param {RecipeUploadUpdateArgs} args - Arguments to update one RecipeUpload.
     * @example
     * // Update one RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUploadUpdateArgs>(args: SelectSubset<T, RecipeUploadUpdateArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeUploads.
     * @param {RecipeUploadDeleteManyArgs} args - Arguments to filter RecipeUploads to delete.
     * @example
     * // Delete a few RecipeUploads
     * const { count } = await prisma.recipeUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeUploadDeleteManyArgs>(args?: SelectSubset<T, RecipeUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeUploads
     * const recipeUpload = await prisma.recipeUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUploadUpdateManyArgs>(args: SelectSubset<T, RecipeUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeUploads and returns the data updated in the database.
     * @param {RecipeUploadUpdateManyAndReturnArgs} args - Arguments to update many RecipeUploads.
     * @example
     * // Update many RecipeUploads
     * const recipeUpload = await prisma.recipeUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeUploads and only return the `id`
     * const recipeUploadWithIdOnly = await prisma.recipeUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeUpload.
     * @param {RecipeUploadUpsertArgs} args - Arguments to update or create a RecipeUpload.
     * @example
     * // Update or create a RecipeUpload
     * const recipeUpload = await prisma.recipeUpload.upsert({
     *   create: {
     *     // ... data to create a RecipeUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeUpload we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUploadUpsertArgs>(args: SelectSubset<T, RecipeUploadUpsertArgs<ExtArgs>>): Prisma__RecipeUploadClient<$Result.GetResult<Prisma.$RecipeUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadCountArgs} args - Arguments to filter RecipeUploads to count.
     * @example
     * // Count the number of RecipeUploads
     * const count = await prisma.recipeUpload.count({
     *   where: {
     *     // ... the filter for the RecipeUploads we want to count
     *   }
     * })
    **/
    count<T extends RecipeUploadCountArgs>(
      args?: Subset<T, RecipeUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeUploadAggregateArgs>(args: Subset<T, RecipeUploadAggregateArgs>): Prisma.PrismaPromise<GetRecipeUploadAggregateType<T>>

    /**
     * Group by RecipeUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUploadGroupByArgs} args - Group by arguments.
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
      T extends RecipeUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeUploadGroupByArgs['orderBy'] }
        : { orderBy?: RecipeUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeUpload model
   */
  readonly fields: RecipeUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RecipeUpload model
   */
  interface RecipeUploadFieldRefs {
    readonly id: FieldRef<"RecipeUpload", 'String'>
    readonly created_at: FieldRef<"RecipeUpload", 'DateTime'>
    readonly title: FieldRef<"RecipeUpload", 'String'>
    readonly description: FieldRef<"RecipeUpload", 'String'>
    readonly recipe: FieldRef<"RecipeUpload", 'String'>
    readonly method: FieldRef<"RecipeUpload", 'String'>
    readonly rating: FieldRef<"RecipeUpload", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RecipeUpload findUnique
   */
  export type RecipeUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter, which RecipeUpload to fetch.
     */
    where: RecipeUploadWhereUniqueInput
  }

  /**
   * RecipeUpload findUniqueOrThrow
   */
  export type RecipeUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter, which RecipeUpload to fetch.
     */
    where: RecipeUploadWhereUniqueInput
  }

  /**
   * RecipeUpload findFirst
   */
  export type RecipeUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter, which RecipeUpload to fetch.
     */
    where?: RecipeUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUploads to fetch.
     */
    orderBy?: RecipeUploadOrderByWithRelationInput | RecipeUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeUploads.
     */
    cursor?: RecipeUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeUploads.
     */
    distinct?: RecipeUploadScalarFieldEnum | RecipeUploadScalarFieldEnum[]
  }

  /**
   * RecipeUpload findFirstOrThrow
   */
  export type RecipeUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter, which RecipeUpload to fetch.
     */
    where?: RecipeUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUploads to fetch.
     */
    orderBy?: RecipeUploadOrderByWithRelationInput | RecipeUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeUploads.
     */
    cursor?: RecipeUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeUploads.
     */
    distinct?: RecipeUploadScalarFieldEnum | RecipeUploadScalarFieldEnum[]
  }

  /**
   * RecipeUpload findMany
   */
  export type RecipeUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter, which RecipeUploads to fetch.
     */
    where?: RecipeUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUploads to fetch.
     */
    orderBy?: RecipeUploadOrderByWithRelationInput | RecipeUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeUploads.
     */
    cursor?: RecipeUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUploads.
     */
    skip?: number
    distinct?: RecipeUploadScalarFieldEnum | RecipeUploadScalarFieldEnum[]
  }

  /**
   * RecipeUpload create
   */
  export type RecipeUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * The data needed to create a RecipeUpload.
     */
    data: XOR<RecipeUploadCreateInput, RecipeUploadUncheckedCreateInput>
  }

  /**
   * RecipeUpload createMany
   */
  export type RecipeUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeUploads.
     */
    data: RecipeUploadCreateManyInput | RecipeUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeUpload createManyAndReturn
   */
  export type RecipeUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeUploads.
     */
    data: RecipeUploadCreateManyInput | RecipeUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeUpload update
   */
  export type RecipeUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * The data needed to update a RecipeUpload.
     */
    data: XOR<RecipeUploadUpdateInput, RecipeUploadUncheckedUpdateInput>
    /**
     * Choose, which RecipeUpload to update.
     */
    where: RecipeUploadWhereUniqueInput
  }

  /**
   * RecipeUpload updateMany
   */
  export type RecipeUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeUploads.
     */
    data: XOR<RecipeUploadUpdateManyMutationInput, RecipeUploadUncheckedUpdateManyInput>
    /**
     * Filter which RecipeUploads to update
     */
    where?: RecipeUploadWhereInput
    /**
     * Limit how many RecipeUploads to update.
     */
    limit?: number
  }

  /**
   * RecipeUpload updateManyAndReturn
   */
  export type RecipeUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * The data used to update RecipeUploads.
     */
    data: XOR<RecipeUploadUpdateManyMutationInput, RecipeUploadUncheckedUpdateManyInput>
    /**
     * Filter which RecipeUploads to update
     */
    where?: RecipeUploadWhereInput
    /**
     * Limit how many RecipeUploads to update.
     */
    limit?: number
  }

  /**
   * RecipeUpload upsert
   */
  export type RecipeUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * The filter to search for the RecipeUpload to update in case it exists.
     */
    where: RecipeUploadWhereUniqueInput
    /**
     * In case the RecipeUpload found by the `where` argument doesn't exist, create a new RecipeUpload with this data.
     */
    create: XOR<RecipeUploadCreateInput, RecipeUploadUncheckedCreateInput>
    /**
     * In case the RecipeUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUploadUpdateInput, RecipeUploadUncheckedUpdateInput>
  }

  /**
   * RecipeUpload delete
   */
  export type RecipeUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
    /**
     * Filter which RecipeUpload to delete.
     */
    where: RecipeUploadWhereUniqueInput
  }

  /**
   * RecipeUpload deleteMany
   */
  export type RecipeUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeUploads to delete
     */
    where?: RecipeUploadWhereInput
    /**
     * Limit how many RecipeUploads to delete.
     */
    limit?: number
  }

  /**
   * RecipeUpload without action
   */
  export type RecipeUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUpload
     */
    select?: RecipeUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUpload
     */
    omit?: RecipeUploadOmit<ExtArgs> | null
  }


  /**
   * Model RestaurantUpload
   */

  export type AggregateRestaurantUpload = {
    _count: RestaurantUploadCountAggregateOutputType | null
    _avg: RestaurantUploadAvgAggregateOutputType | null
    _sum: RestaurantUploadSumAggregateOutputType | null
    _min: RestaurantUploadMinAggregateOutputType | null
    _max: RestaurantUploadMaxAggregateOutputType | null
  }

  export type RestaurantUploadAvgAggregateOutputType = {
    rating: number | null
  }

  export type RestaurantUploadSumAggregateOutputType = {
    rating: number | null
  }

  export type RestaurantUploadMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    entree: string | null
    main: string | null
    dessert: string | null
    rating: number | null
    review: string | null
    location: string | null
    price_range: string | null
  }

  export type RestaurantUploadMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    entree: string | null
    main: string | null
    dessert: string | null
    rating: number | null
    review: string | null
    location: string | null
    price_range: string | null
  }

  export type RestaurantUploadCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    description: number
    entree: number
    main: number
    dessert: number
    rating: number
    review: number
    location: number
    price_range: number
    _all: number
  }


  export type RestaurantUploadAvgAggregateInputType = {
    rating?: true
  }

  export type RestaurantUploadSumAggregateInputType = {
    rating?: true
  }

  export type RestaurantUploadMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    entree?: true
    main?: true
    dessert?: true
    rating?: true
    review?: true
    location?: true
    price_range?: true
  }

  export type RestaurantUploadMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    entree?: true
    main?: true
    dessert?: true
    rating?: true
    review?: true
    location?: true
    price_range?: true
  }

  export type RestaurantUploadCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    entree?: true
    main?: true
    dessert?: true
    rating?: true
    review?: true
    location?: true
    price_range?: true
    _all?: true
  }

  export type RestaurantUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantUpload to aggregate.
     */
    where?: RestaurantUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantUploads to fetch.
     */
    orderBy?: RestaurantUploadOrderByWithRelationInput | RestaurantUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantUploads
    **/
    _count?: true | RestaurantUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantUploadMaxAggregateInputType
  }

  export type GetRestaurantUploadAggregateType<T extends RestaurantUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantUpload[P]>
      : GetScalarType<T[P], AggregateRestaurantUpload[P]>
  }




  export type RestaurantUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantUploadWhereInput
    orderBy?: RestaurantUploadOrderByWithAggregationInput | RestaurantUploadOrderByWithAggregationInput[]
    by: RestaurantUploadScalarFieldEnum[] | RestaurantUploadScalarFieldEnum
    having?: RestaurantUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantUploadCountAggregateInputType | true
    _avg?: RestaurantUploadAvgAggregateInputType
    _sum?: RestaurantUploadSumAggregateInputType
    _min?: RestaurantUploadMinAggregateInputType
    _max?: RestaurantUploadMaxAggregateInputType
  }

  export type RestaurantUploadGroupByOutputType = {
    id: string
    created_at: Date
    title: string
    description: string
    entree: string
    main: string
    dessert: string
    rating: number
    review: string
    location: string
    price_range: string
    _count: RestaurantUploadCountAggregateOutputType | null
    _avg: RestaurantUploadAvgAggregateOutputType | null
    _sum: RestaurantUploadSumAggregateOutputType | null
    _min: RestaurantUploadMinAggregateOutputType | null
    _max: RestaurantUploadMaxAggregateOutputType | null
  }

  type GetRestaurantUploadGroupByPayload<T extends RestaurantUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantUploadGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantUploadGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    entree?: boolean
    main?: boolean
    dessert?: boolean
    rating?: boolean
    review?: boolean
    location?: boolean
    price_range?: boolean
  }, ExtArgs["result"]["restaurantUpload"]>

  export type RestaurantUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    entree?: boolean
    main?: boolean
    dessert?: boolean
    rating?: boolean
    review?: boolean
    location?: boolean
    price_range?: boolean
  }, ExtArgs["result"]["restaurantUpload"]>

  export type RestaurantUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    entree?: boolean
    main?: boolean
    dessert?: boolean
    rating?: boolean
    review?: boolean
    location?: boolean
    price_range?: boolean
  }, ExtArgs["result"]["restaurantUpload"]>

  export type RestaurantUploadSelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    entree?: boolean
    main?: boolean
    dessert?: boolean
    rating?: boolean
    review?: boolean
    location?: boolean
    price_range?: boolean
  }

  export type RestaurantUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title" | "description" | "entree" | "main" | "dessert" | "rating" | "review" | "location" | "price_range", ExtArgs["result"]["restaurantUpload"]>

  export type $RestaurantUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantUpload"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      title: string
      description: string
      entree: string
      main: string
      dessert: string
      rating: number
      review: string
      location: string
      price_range: string
    }, ExtArgs["result"]["restaurantUpload"]>
    composites: {}
  }

  type RestaurantUploadGetPayload<S extends boolean | null | undefined | RestaurantUploadDefaultArgs> = $Result.GetResult<Prisma.$RestaurantUploadPayload, S>

  type RestaurantUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantUploadCountAggregateInputType | true
    }

  export interface RestaurantUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantUpload'], meta: { name: 'RestaurantUpload' } }
    /**
     * Find zero or one RestaurantUpload that matches the filter.
     * @param {RestaurantUploadFindUniqueArgs} args - Arguments to find a RestaurantUpload
     * @example
     * // Get one RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantUploadFindUniqueArgs>(args: SelectSubset<T, RestaurantUploadFindUniqueArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestaurantUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantUploadFindUniqueOrThrowArgs} args - Arguments to find a RestaurantUpload
     * @example
     * // Get one RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadFindFirstArgs} args - Arguments to find a RestaurantUpload
     * @example
     * // Get one RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantUploadFindFirstArgs>(args?: SelectSubset<T, RestaurantUploadFindFirstArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadFindFirstOrThrowArgs} args - Arguments to find a RestaurantUpload
     * @example
     * // Get one RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestaurantUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantUploads
     * const restaurantUploads = await prisma.restaurantUpload.findMany()
     * 
     * // Get first 10 RestaurantUploads
     * const restaurantUploads = await prisma.restaurantUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantUploadWithIdOnly = await prisma.restaurantUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantUploadFindManyArgs>(args?: SelectSubset<T, RestaurantUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestaurantUpload.
     * @param {RestaurantUploadCreateArgs} args - Arguments to create a RestaurantUpload.
     * @example
     * // Create one RestaurantUpload
     * const RestaurantUpload = await prisma.restaurantUpload.create({
     *   data: {
     *     // ... data to create a RestaurantUpload
     *   }
     * })
     * 
     */
    create<T extends RestaurantUploadCreateArgs>(args: SelectSubset<T, RestaurantUploadCreateArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestaurantUploads.
     * @param {RestaurantUploadCreateManyArgs} args - Arguments to create many RestaurantUploads.
     * @example
     * // Create many RestaurantUploads
     * const restaurantUpload = await prisma.restaurantUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantUploadCreateManyArgs>(args?: SelectSubset<T, RestaurantUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestaurantUploads and returns the data saved in the database.
     * @param {RestaurantUploadCreateManyAndReturnArgs} args - Arguments to create many RestaurantUploads.
     * @example
     * // Create many RestaurantUploads
     * const restaurantUpload = await prisma.restaurantUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestaurantUploads and only return the `id`
     * const restaurantUploadWithIdOnly = await prisma.restaurantUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestaurantUpload.
     * @param {RestaurantUploadDeleteArgs} args - Arguments to delete one RestaurantUpload.
     * @example
     * // Delete one RestaurantUpload
     * const RestaurantUpload = await prisma.restaurantUpload.delete({
     *   where: {
     *     // ... filter to delete one RestaurantUpload
     *   }
     * })
     * 
     */
    delete<T extends RestaurantUploadDeleteArgs>(args: SelectSubset<T, RestaurantUploadDeleteArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestaurantUpload.
     * @param {RestaurantUploadUpdateArgs} args - Arguments to update one RestaurantUpload.
     * @example
     * // Update one RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUploadUpdateArgs>(args: SelectSubset<T, RestaurantUploadUpdateArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestaurantUploads.
     * @param {RestaurantUploadDeleteManyArgs} args - Arguments to filter RestaurantUploads to delete.
     * @example
     * // Delete a few RestaurantUploads
     * const { count } = await prisma.restaurantUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantUploadDeleteManyArgs>(args?: SelectSubset<T, RestaurantUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantUploads
     * const restaurantUpload = await prisma.restaurantUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUploadUpdateManyArgs>(args: SelectSubset<T, RestaurantUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantUploads and returns the data updated in the database.
     * @param {RestaurantUploadUpdateManyAndReturnArgs} args - Arguments to update many RestaurantUploads.
     * @example
     * // Update many RestaurantUploads
     * const restaurantUpload = await prisma.restaurantUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestaurantUploads and only return the `id`
     * const restaurantUploadWithIdOnly = await prisma.restaurantUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestaurantUpload.
     * @param {RestaurantUploadUpsertArgs} args - Arguments to update or create a RestaurantUpload.
     * @example
     * // Update or create a RestaurantUpload
     * const restaurantUpload = await prisma.restaurantUpload.upsert({
     *   create: {
     *     // ... data to create a RestaurantUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantUpload we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUploadUpsertArgs>(args: SelectSubset<T, RestaurantUploadUpsertArgs<ExtArgs>>): Prisma__RestaurantUploadClient<$Result.GetResult<Prisma.$RestaurantUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestaurantUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadCountArgs} args - Arguments to filter RestaurantUploads to count.
     * @example
     * // Count the number of RestaurantUploads
     * const count = await prisma.restaurantUpload.count({
     *   where: {
     *     // ... the filter for the RestaurantUploads we want to count
     *   }
     * })
    **/
    count<T extends RestaurantUploadCountArgs>(
      args?: Subset<T, RestaurantUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantUploadAggregateArgs>(args: Subset<T, RestaurantUploadAggregateArgs>): Prisma.PrismaPromise<GetRestaurantUploadAggregateType<T>>

    /**
     * Group by RestaurantUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUploadGroupByArgs} args - Group by arguments.
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
      T extends RestaurantUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantUploadGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantUpload model
   */
  readonly fields: RestaurantUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RestaurantUpload model
   */
  interface RestaurantUploadFieldRefs {
    readonly id: FieldRef<"RestaurantUpload", 'String'>
    readonly created_at: FieldRef<"RestaurantUpload", 'DateTime'>
    readonly title: FieldRef<"RestaurantUpload", 'String'>
    readonly description: FieldRef<"RestaurantUpload", 'String'>
    readonly entree: FieldRef<"RestaurantUpload", 'String'>
    readonly main: FieldRef<"RestaurantUpload", 'String'>
    readonly dessert: FieldRef<"RestaurantUpload", 'String'>
    readonly rating: FieldRef<"RestaurantUpload", 'Int'>
    readonly review: FieldRef<"RestaurantUpload", 'String'>
    readonly location: FieldRef<"RestaurantUpload", 'String'>
    readonly price_range: FieldRef<"RestaurantUpload", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantUpload findUnique
   */
  export type RestaurantUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter, which RestaurantUpload to fetch.
     */
    where: RestaurantUploadWhereUniqueInput
  }

  /**
   * RestaurantUpload findUniqueOrThrow
   */
  export type RestaurantUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter, which RestaurantUpload to fetch.
     */
    where: RestaurantUploadWhereUniqueInput
  }

  /**
   * RestaurantUpload findFirst
   */
  export type RestaurantUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter, which RestaurantUpload to fetch.
     */
    where?: RestaurantUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantUploads to fetch.
     */
    orderBy?: RestaurantUploadOrderByWithRelationInput | RestaurantUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantUploads.
     */
    cursor?: RestaurantUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantUploads.
     */
    distinct?: RestaurantUploadScalarFieldEnum | RestaurantUploadScalarFieldEnum[]
  }

  /**
   * RestaurantUpload findFirstOrThrow
   */
  export type RestaurantUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter, which RestaurantUpload to fetch.
     */
    where?: RestaurantUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantUploads to fetch.
     */
    orderBy?: RestaurantUploadOrderByWithRelationInput | RestaurantUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantUploads.
     */
    cursor?: RestaurantUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantUploads.
     */
    distinct?: RestaurantUploadScalarFieldEnum | RestaurantUploadScalarFieldEnum[]
  }

  /**
   * RestaurantUpload findMany
   */
  export type RestaurantUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter, which RestaurantUploads to fetch.
     */
    where?: RestaurantUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantUploads to fetch.
     */
    orderBy?: RestaurantUploadOrderByWithRelationInput | RestaurantUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantUploads.
     */
    cursor?: RestaurantUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantUploads.
     */
    skip?: number
    distinct?: RestaurantUploadScalarFieldEnum | RestaurantUploadScalarFieldEnum[]
  }

  /**
   * RestaurantUpload create
   */
  export type RestaurantUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * The data needed to create a RestaurantUpload.
     */
    data: XOR<RestaurantUploadCreateInput, RestaurantUploadUncheckedCreateInput>
  }

  /**
   * RestaurantUpload createMany
   */
  export type RestaurantUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantUploads.
     */
    data: RestaurantUploadCreateManyInput | RestaurantUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantUpload createManyAndReturn
   */
  export type RestaurantUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * The data used to create many RestaurantUploads.
     */
    data: RestaurantUploadCreateManyInput | RestaurantUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantUpload update
   */
  export type RestaurantUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * The data needed to update a RestaurantUpload.
     */
    data: XOR<RestaurantUploadUpdateInput, RestaurantUploadUncheckedUpdateInput>
    /**
     * Choose, which RestaurantUpload to update.
     */
    where: RestaurantUploadWhereUniqueInput
  }

  /**
   * RestaurantUpload updateMany
   */
  export type RestaurantUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantUploads.
     */
    data: XOR<RestaurantUploadUpdateManyMutationInput, RestaurantUploadUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantUploads to update
     */
    where?: RestaurantUploadWhereInput
    /**
     * Limit how many RestaurantUploads to update.
     */
    limit?: number
  }

  /**
   * RestaurantUpload updateManyAndReturn
   */
  export type RestaurantUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * The data used to update RestaurantUploads.
     */
    data: XOR<RestaurantUploadUpdateManyMutationInput, RestaurantUploadUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantUploads to update
     */
    where?: RestaurantUploadWhereInput
    /**
     * Limit how many RestaurantUploads to update.
     */
    limit?: number
  }

  /**
   * RestaurantUpload upsert
   */
  export type RestaurantUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * The filter to search for the RestaurantUpload to update in case it exists.
     */
    where: RestaurantUploadWhereUniqueInput
    /**
     * In case the RestaurantUpload found by the `where` argument doesn't exist, create a new RestaurantUpload with this data.
     */
    create: XOR<RestaurantUploadCreateInput, RestaurantUploadUncheckedCreateInput>
    /**
     * In case the RestaurantUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUploadUpdateInput, RestaurantUploadUncheckedUpdateInput>
  }

  /**
   * RestaurantUpload delete
   */
  export type RestaurantUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
    /**
     * Filter which RestaurantUpload to delete.
     */
    where: RestaurantUploadWhereUniqueInput
  }

  /**
   * RestaurantUpload deleteMany
   */
  export type RestaurantUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantUploads to delete
     */
    where?: RestaurantUploadWhereInput
    /**
     * Limit how many RestaurantUploads to delete.
     */
    limit?: number
  }

  /**
   * RestaurantUpload without action
   */
  export type RestaurantUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantUpload
     */
    select?: RestaurantUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantUpload
     */
    omit?: RestaurantUploadOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecipeUploadScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    description: 'description',
    recipe: 'recipe',
    method: 'method',
    rating: 'rating'
  };

  export type RecipeUploadScalarFieldEnum = (typeof RecipeUploadScalarFieldEnum)[keyof typeof RecipeUploadScalarFieldEnum]


  export const RestaurantUploadScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    description: 'description',
    entree: 'entree',
    main: 'main',
    dessert: 'dessert',
    rating: 'rating',
    review: 'review',
    location: 'location',
    price_range: 'price_range'
  };

  export type RestaurantUploadScalarFieldEnum = (typeof RestaurantUploadScalarFieldEnum)[keyof typeof RestaurantUploadScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RecipeUploadWhereInput = {
    AND?: RecipeUploadWhereInput | RecipeUploadWhereInput[]
    OR?: RecipeUploadWhereInput[]
    NOT?: RecipeUploadWhereInput | RecipeUploadWhereInput[]
    id?: StringFilter<"RecipeUpload"> | string
    created_at?: DateTimeFilter<"RecipeUpload"> | Date | string
    title?: StringFilter<"RecipeUpload"> | string
    description?: StringFilter<"RecipeUpload"> | string
    recipe?: StringFilter<"RecipeUpload"> | string
    method?: StringFilter<"RecipeUpload"> | string
    rating?: IntFilter<"RecipeUpload"> | number
  }

  export type RecipeUploadOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipe?: SortOrder
    method?: SortOrder
    rating?: SortOrder
  }

  export type RecipeUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeUploadWhereInput | RecipeUploadWhereInput[]
    OR?: RecipeUploadWhereInput[]
    NOT?: RecipeUploadWhereInput | RecipeUploadWhereInput[]
    created_at?: DateTimeFilter<"RecipeUpload"> | Date | string
    title?: StringFilter<"RecipeUpload"> | string
    description?: StringFilter<"RecipeUpload"> | string
    recipe?: StringFilter<"RecipeUpload"> | string
    method?: StringFilter<"RecipeUpload"> | string
    rating?: IntFilter<"RecipeUpload"> | number
  }, "id">

  export type RecipeUploadOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipe?: SortOrder
    method?: SortOrder
    rating?: SortOrder
    _count?: RecipeUploadCountOrderByAggregateInput
    _avg?: RecipeUploadAvgOrderByAggregateInput
    _max?: RecipeUploadMaxOrderByAggregateInput
    _min?: RecipeUploadMinOrderByAggregateInput
    _sum?: RecipeUploadSumOrderByAggregateInput
  }

  export type RecipeUploadScalarWhereWithAggregatesInput = {
    AND?: RecipeUploadScalarWhereWithAggregatesInput | RecipeUploadScalarWhereWithAggregatesInput[]
    OR?: RecipeUploadScalarWhereWithAggregatesInput[]
    NOT?: RecipeUploadScalarWhereWithAggregatesInput | RecipeUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeUpload"> | string
    created_at?: DateTimeWithAggregatesFilter<"RecipeUpload"> | Date | string
    title?: StringWithAggregatesFilter<"RecipeUpload"> | string
    description?: StringWithAggregatesFilter<"RecipeUpload"> | string
    recipe?: StringWithAggregatesFilter<"RecipeUpload"> | string
    method?: StringWithAggregatesFilter<"RecipeUpload"> | string
    rating?: IntWithAggregatesFilter<"RecipeUpload"> | number
  }

  export type RestaurantUploadWhereInput = {
    AND?: RestaurantUploadWhereInput | RestaurantUploadWhereInput[]
    OR?: RestaurantUploadWhereInput[]
    NOT?: RestaurantUploadWhereInput | RestaurantUploadWhereInput[]
    id?: StringFilter<"RestaurantUpload"> | string
    created_at?: DateTimeFilter<"RestaurantUpload"> | Date | string
    title?: StringFilter<"RestaurantUpload"> | string
    description?: StringFilter<"RestaurantUpload"> | string
    entree?: StringFilter<"RestaurantUpload"> | string
    main?: StringFilter<"RestaurantUpload"> | string
    dessert?: StringFilter<"RestaurantUpload"> | string
    rating?: IntFilter<"RestaurantUpload"> | number
    review?: StringFilter<"RestaurantUpload"> | string
    location?: StringFilter<"RestaurantUpload"> | string
    price_range?: StringFilter<"RestaurantUpload"> | string
  }

  export type RestaurantUploadOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entree?: SortOrder
    main?: SortOrder
    dessert?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    location?: SortOrder
    price_range?: SortOrder
  }

  export type RestaurantUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestaurantUploadWhereInput | RestaurantUploadWhereInput[]
    OR?: RestaurantUploadWhereInput[]
    NOT?: RestaurantUploadWhereInput | RestaurantUploadWhereInput[]
    created_at?: DateTimeFilter<"RestaurantUpload"> | Date | string
    title?: StringFilter<"RestaurantUpload"> | string
    description?: StringFilter<"RestaurantUpload"> | string
    entree?: StringFilter<"RestaurantUpload"> | string
    main?: StringFilter<"RestaurantUpload"> | string
    dessert?: StringFilter<"RestaurantUpload"> | string
    rating?: IntFilter<"RestaurantUpload"> | number
    review?: StringFilter<"RestaurantUpload"> | string
    location?: StringFilter<"RestaurantUpload"> | string
    price_range?: StringFilter<"RestaurantUpload"> | string
  }, "id">

  export type RestaurantUploadOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entree?: SortOrder
    main?: SortOrder
    dessert?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    location?: SortOrder
    price_range?: SortOrder
    _count?: RestaurantUploadCountOrderByAggregateInput
    _avg?: RestaurantUploadAvgOrderByAggregateInput
    _max?: RestaurantUploadMaxOrderByAggregateInput
    _min?: RestaurantUploadMinOrderByAggregateInput
    _sum?: RestaurantUploadSumOrderByAggregateInput
  }

  export type RestaurantUploadScalarWhereWithAggregatesInput = {
    AND?: RestaurantUploadScalarWhereWithAggregatesInput | RestaurantUploadScalarWhereWithAggregatesInput[]
    OR?: RestaurantUploadScalarWhereWithAggregatesInput[]
    NOT?: RestaurantUploadScalarWhereWithAggregatesInput | RestaurantUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    created_at?: DateTimeWithAggregatesFilter<"RestaurantUpload"> | Date | string
    title?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    description?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    entree?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    main?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    dessert?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    rating?: IntWithAggregatesFilter<"RestaurantUpload"> | number
    review?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    location?: StringWithAggregatesFilter<"RestaurantUpload"> | string
    price_range?: StringWithAggregatesFilter<"RestaurantUpload"> | string
  }

  export type RecipeUploadCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    recipe: string
    method: string
    rating: number
  }

  export type RecipeUploadUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    recipe: string
    method: string
    rating: number
  }

  export type RecipeUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipe?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipe?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUploadCreateManyInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    recipe: string
    method: string
    rating: number
  }

  export type RecipeUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipe?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipe?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RestaurantUploadCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    entree: string
    main: string
    dessert: string
    rating: number
    review: string
    location: string
    price_range: string
  }

  export type RestaurantUploadUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    entree: string
    main: string
    dessert: string
    rating: number
    review: string
    location: string
    price_range: string
  }

  export type RestaurantUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entree?: StringFieldUpdateOperationsInput | string
    main?: StringFieldUpdateOperationsInput | string
    dessert?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price_range?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entree?: StringFieldUpdateOperationsInput | string
    main?: StringFieldUpdateOperationsInput | string
    dessert?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price_range?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUploadCreateManyInput = {
    id?: string
    created_at?: Date | string
    title: string
    description: string
    entree: string
    main: string
    dessert: string
    rating: number
    review: string
    location: string
    price_range: string
  }

  export type RestaurantUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entree?: StringFieldUpdateOperationsInput | string
    main?: StringFieldUpdateOperationsInput | string
    dessert?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price_range?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entree?: StringFieldUpdateOperationsInput | string
    main?: StringFieldUpdateOperationsInput | string
    dessert?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price_range?: StringFieldUpdateOperationsInput | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RecipeUploadCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipe?: SortOrder
    method?: SortOrder
    rating?: SortOrder
  }

  export type RecipeUploadAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RecipeUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipe?: SortOrder
    method?: SortOrder
    rating?: SortOrder
  }

  export type RecipeUploadMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipe?: SortOrder
    method?: SortOrder
    rating?: SortOrder
  }

  export type RecipeUploadSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RestaurantUploadCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entree?: SortOrder
    main?: SortOrder
    dessert?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    location?: SortOrder
    price_range?: SortOrder
  }

  export type RestaurantUploadAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RestaurantUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entree?: SortOrder
    main?: SortOrder
    dessert?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    location?: SortOrder
    price_range?: SortOrder
  }

  export type RestaurantUploadMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entree?: SortOrder
    main?: SortOrder
    dessert?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    location?: SortOrder
    price_range?: SortOrder
  }

  export type RestaurantUploadSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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