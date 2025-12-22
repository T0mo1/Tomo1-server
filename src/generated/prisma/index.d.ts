
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Child
 * 
 */
export type Child = $Result.DefaultSelection<Prisma.$ChildPayload>
/**
 * Model DenverQuestion
 * 
 */
export type DenverQuestion = $Result.DefaultSelection<Prisma.$DenverQuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parents
 * const parents = await prisma.parent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Parents
   * const parents = await prisma.parent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.child`: Exposes CRUD operations for the **Child** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Children
    * const children = await prisma.child.findMany()
    * ```
    */
  get child(): Prisma.ChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.denverQuestion`: Exposes CRUD operations for the **DenverQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DenverQuestions
    * const denverQuestions = await prisma.denverQuestion.findMany()
    * ```
    */
  get denverQuestion(): Prisma.DenverQuestionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Parent: 'Parent',
    Child: 'Child',
    DenverQuestion: 'DenverQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "parent" | "child" | "denverQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Child: {
        payload: Prisma.$ChildPayload<ExtArgs>
        fields: Prisma.ChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findFirst: {
            args: Prisma.ChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findMany: {
            args: Prisma.ChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          create: {
            args: Prisma.ChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          createMany: {
            args: Prisma.ChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          delete: {
            args: Prisma.ChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          update: {
            args: Prisma.ChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          deleteMany: {
            args: Prisma.ChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          upsert: {
            args: Prisma.ChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          aggregate: {
            args: Prisma.ChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChild>
          }
          groupBy: {
            args: Prisma.ChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChildCountArgs<ExtArgs>
            result: $Utils.Optional<ChildCountAggregateOutputType> | number
          }
        }
      }
      DenverQuestion: {
        payload: Prisma.$DenverQuestionPayload<ExtArgs>
        fields: Prisma.DenverQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DenverQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DenverQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          findFirst: {
            args: Prisma.DenverQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DenverQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          findMany: {
            args: Prisma.DenverQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>[]
          }
          create: {
            args: Prisma.DenverQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          createMany: {
            args: Prisma.DenverQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DenverQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>[]
          }
          delete: {
            args: Prisma.DenverQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          update: {
            args: Prisma.DenverQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          deleteMany: {
            args: Prisma.DenverQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DenverQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DenverQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>[]
          }
          upsert: {
            args: Prisma.DenverQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenverQuestionPayload>
          }
          aggregate: {
            args: Prisma.DenverQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDenverQuestion>
          }
          groupBy: {
            args: Prisma.DenverQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DenverQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DenverQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<DenverQuestionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    parent?: ParentOmit
    child?: ChildOmit
    denverQuestion?: DenverQuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    children: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ParentCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    phoneNumber: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt: Date
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    children?: boolean | Parent$childrenArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "password" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Parent$childrenArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      children: Prisma.$ChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      password: string
      firstName: string
      lastName: string
      createdAt: Date
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children<T extends Parent$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Parent$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly phoneNumber: FieldRef<"Parent", 'String'>
    readonly password: FieldRef<"Parent", 'String'>
    readonly firstName: FieldRef<"Parent", 'String'>
    readonly lastName: FieldRef<"Parent", 'String'>
    readonly createdAt: FieldRef<"Parent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.children
   */
  export type Parent$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    cursor?: ChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Child
   */

  export type AggregateChild = {
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  export type ChildMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dob: Date | null
    createdAt: Date | null
    parentId: string | null
  }

  export type ChildMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dob: Date | null
    createdAt: Date | null
    parentId: string | null
  }

  export type ChildCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dob: number
    createdAt: number
    parentId: number
    _all: number
  }


  export type ChildMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    createdAt?: true
    parentId?: true
  }

  export type ChildMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    createdAt?: true
    parentId?: true
  }

  export type ChildCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    createdAt?: true
    parentId?: true
    _all?: true
  }

  export type ChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Child to aggregate.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Children
    **/
    _count?: true | ChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChildMaxAggregateInputType
  }

  export type GetChildAggregateType<T extends ChildAggregateArgs> = {
        [P in keyof T & keyof AggregateChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChild[P]>
      : GetScalarType<T[P], AggregateChild[P]>
  }




  export type ChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithAggregationInput | ChildOrderByWithAggregationInput[]
    by: ChildScalarFieldEnum[] | ChildScalarFieldEnum
    having?: ChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChildCountAggregateInputType | true
    _min?: ChildMinAggregateInputType
    _max?: ChildMaxAggregateInputType
  }

  export type ChildGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    dob: Date
    createdAt: Date
    parentId: string
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  type GetChildGroupByPayload<T extends ChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChildGroupByOutputType[P]>
            : GetScalarType<T[P], ChildGroupByOutputType[P]>
        }
      >
    >


  export type ChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Child$parentArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Child$parentArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Child$parentArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    createdAt?: boolean
    parentId?: boolean
  }

  export type ChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "dob" | "createdAt" | "parentId", ExtArgs["result"]["child"]>
  export type ChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Child$parentArgs<ExtArgs>
  }
  export type ChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Child$parentArgs<ExtArgs>
  }
  export type ChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Child$parentArgs<ExtArgs>
  }

  export type $ChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Child"
    objects: {
      parent: Prisma.$ParentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      dob: Date
      createdAt: Date
      parentId: string
    }, ExtArgs["result"]["child"]>
    composites: {}
  }

  type ChildGetPayload<S extends boolean | null | undefined | ChildDefaultArgs> = $Result.GetResult<Prisma.$ChildPayload, S>

  type ChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChildCountAggregateInputType | true
    }

  export interface ChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Child'], meta: { name: 'Child' } }
    /**
     * Find zero or one Child that matches the filter.
     * @param {ChildFindUniqueArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChildFindUniqueArgs>(args: SelectSubset<T, ChildFindUniqueArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Child that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChildFindUniqueOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChildFindFirstArgs>(args?: SelectSubset<T, ChildFindFirstArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Children that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Children
     * const children = await prisma.child.findMany()
     * 
     * // Get first 10 Children
     * const children = await prisma.child.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const childWithIdOnly = await prisma.child.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChildFindManyArgs>(args?: SelectSubset<T, ChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Child.
     * @param {ChildCreateArgs} args - Arguments to create a Child.
     * @example
     * // Create one Child
     * const Child = await prisma.child.create({
     *   data: {
     *     // ... data to create a Child
     *   }
     * })
     * 
     */
    create<T extends ChildCreateArgs>(args: SelectSubset<T, ChildCreateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Children.
     * @param {ChildCreateManyArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChildCreateManyArgs>(args?: SelectSubset<T, ChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Children and returns the data saved in the database.
     * @param {ChildCreateManyAndReturnArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Children and only return the `id`
     * const childWithIdOnly = await prisma.child.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Child.
     * @param {ChildDeleteArgs} args - Arguments to delete one Child.
     * @example
     * // Delete one Child
     * const Child = await prisma.child.delete({
     *   where: {
     *     // ... filter to delete one Child
     *   }
     * })
     * 
     */
    delete<T extends ChildDeleteArgs>(args: SelectSubset<T, ChildDeleteArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Child.
     * @param {ChildUpdateArgs} args - Arguments to update one Child.
     * @example
     * // Update one Child
     * const child = await prisma.child.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChildUpdateArgs>(args: SelectSubset<T, ChildUpdateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Children.
     * @param {ChildDeleteManyArgs} args - Arguments to filter Children to delete.
     * @example
     * // Delete a few Children
     * const { count } = await prisma.child.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChildDeleteManyArgs>(args?: SelectSubset<T, ChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChildUpdateManyArgs>(args: SelectSubset<T, ChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children and returns the data updated in the database.
     * @param {ChildUpdateManyAndReturnArgs} args - Arguments to update many Children.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Children and only return the `id`
     * const childWithIdOnly = await prisma.child.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Child.
     * @param {ChildUpsertArgs} args - Arguments to update or create a Child.
     * @example
     * // Update or create a Child
     * const child = await prisma.child.upsert({
     *   create: {
     *     // ... data to create a Child
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Child we want to update
     *   }
     * })
     */
    upsert<T extends ChildUpsertArgs>(args: SelectSubset<T, ChildUpsertArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildCountArgs} args - Arguments to filter Children to count.
     * @example
     * // Count the number of Children
     * const count = await prisma.child.count({
     *   where: {
     *     // ... the filter for the Children we want to count
     *   }
     * })
    **/
    count<T extends ChildCountArgs>(
      args?: Subset<T, ChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChildAggregateArgs>(args: Subset<T, ChildAggregateArgs>): Prisma.PrismaPromise<GetChildAggregateType<T>>

    /**
     * Group by Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildGroupByArgs} args - Group by arguments.
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
      T extends ChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChildGroupByArgs['orderBy'] }
        : { orderBy?: ChildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Child model
   */
  readonly fields: ChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Child.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Child$parentArgs<ExtArgs> = {}>(args?: Subset<T, Child$parentArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Child model
   */
  interface ChildFieldRefs {
    readonly id: FieldRef<"Child", 'String'>
    readonly firstName: FieldRef<"Child", 'String'>
    readonly lastName: FieldRef<"Child", 'String'>
    readonly dob: FieldRef<"Child", 'DateTime'>
    readonly createdAt: FieldRef<"Child", 'DateTime'>
    readonly parentId: FieldRef<"Child", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Child findUnique
   */
  export type ChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findUniqueOrThrow
   */
  export type ChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findFirst
   */
  export type ChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findFirstOrThrow
   */
  export type ChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findMany
   */
  export type ChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Children to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child create
   */
  export type ChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to create a Child.
     */
    data: XOR<ChildCreateInput, ChildUncheckedCreateInput>
  }

  /**
   * Child createMany
   */
  export type ChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Child createManyAndReturn
   */
  export type ChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Child update
   */
  export type ChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to update a Child.
     */
    data: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
    /**
     * Choose, which Child to update.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child updateMany
   */
  export type ChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
  }

  /**
   * Child updateManyAndReturn
   */
  export type ChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Child upsert
   */
  export type ChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The filter to search for the Child to update in case it exists.
     */
    where: ChildWhereUniqueInput
    /**
     * In case the Child found by the `where` argument doesn't exist, create a new Child with this data.
     */
    create: XOR<ChildCreateInput, ChildUncheckedCreateInput>
    /**
     * In case the Child was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
  }

  /**
   * Child delete
   */
  export type ChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter which Child to delete.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child deleteMany
   */
  export type ChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Children to delete
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to delete.
     */
    limit?: number
  }

  /**
   * Child.parent
   */
  export type Child$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
  }

  /**
   * Child without action
   */
  export type ChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
  }


  /**
   * Model DenverQuestion
   */

  export type AggregateDenverQuestion = {
    _count: DenverQuestionCountAggregateOutputType | null
    _avg: DenverQuestionAvgAggregateOutputType | null
    _sum: DenverQuestionSumAggregateOutputType | null
    _min: DenverQuestionMinAggregateOutputType | null
    _max: DenverQuestionMaxAggregateOutputType | null
  }

  export type DenverQuestionAvgAggregateOutputType = {
    ageMonthMin: number | null
    ageMonthMax: number | null
    minCorrect: number | null
  }

  export type DenverQuestionSumAggregateOutputType = {
    ageMonthMin: number | null
    ageMonthMax: number | null
    minCorrect: number | null
  }

  export type DenverQuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    ageMonthMin: number | null
    ageMonthMax: number | null
    category: string | null
    type: string | null
    minCorrect: number | null
    audio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DenverQuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    ageMonthMin: number | null
    ageMonthMax: number | null
    category: string | null
    type: string | null
    minCorrect: number | null
    audio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DenverQuestionCountAggregateOutputType = {
    id: number
    text: number
    ageMonthMin: number
    ageMonthMax: number
    category: number
    type: number
    options: number
    minCorrect: number
    audio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DenverQuestionAvgAggregateInputType = {
    ageMonthMin?: true
    ageMonthMax?: true
    minCorrect?: true
  }

  export type DenverQuestionSumAggregateInputType = {
    ageMonthMin?: true
    ageMonthMax?: true
    minCorrect?: true
  }

  export type DenverQuestionMinAggregateInputType = {
    id?: true
    text?: true
    ageMonthMin?: true
    ageMonthMax?: true
    category?: true
    type?: true
    minCorrect?: true
    audio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DenverQuestionMaxAggregateInputType = {
    id?: true
    text?: true
    ageMonthMin?: true
    ageMonthMax?: true
    category?: true
    type?: true
    minCorrect?: true
    audio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DenverQuestionCountAggregateInputType = {
    id?: true
    text?: true
    ageMonthMin?: true
    ageMonthMax?: true
    category?: true
    type?: true
    options?: true
    minCorrect?: true
    audio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DenverQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenverQuestion to aggregate.
     */
    where?: DenverQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenverQuestions to fetch.
     */
    orderBy?: DenverQuestionOrderByWithRelationInput | DenverQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DenverQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenverQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenverQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DenverQuestions
    **/
    _count?: true | DenverQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DenverQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DenverQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenverQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenverQuestionMaxAggregateInputType
  }

  export type GetDenverQuestionAggregateType<T extends DenverQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateDenverQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDenverQuestion[P]>
      : GetScalarType<T[P], AggregateDenverQuestion[P]>
  }




  export type DenverQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenverQuestionWhereInput
    orderBy?: DenverQuestionOrderByWithAggregationInput | DenverQuestionOrderByWithAggregationInput[]
    by: DenverQuestionScalarFieldEnum[] | DenverQuestionScalarFieldEnum
    having?: DenverQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenverQuestionCountAggregateInputType | true
    _avg?: DenverQuestionAvgAggregateInputType
    _sum?: DenverQuestionSumAggregateInputType
    _min?: DenverQuestionMinAggregateInputType
    _max?: DenverQuestionMaxAggregateInputType
  }

  export type DenverQuestionGroupByOutputType = {
    id: string
    text: string
    ageMonthMin: number
    ageMonthMax: number
    category: string
    type: string
    options: JsonValue | null
    minCorrect: number | null
    audio: string | null
    createdAt: Date
    updatedAt: Date
    _count: DenverQuestionCountAggregateOutputType | null
    _avg: DenverQuestionAvgAggregateOutputType | null
    _sum: DenverQuestionSumAggregateOutputType | null
    _min: DenverQuestionMinAggregateOutputType | null
    _max: DenverQuestionMaxAggregateOutputType | null
  }

  type GetDenverQuestionGroupByPayload<T extends DenverQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DenverQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenverQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenverQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], DenverQuestionGroupByOutputType[P]>
        }
      >
    >


  export type DenverQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ageMonthMin?: boolean
    ageMonthMax?: boolean
    category?: boolean
    type?: boolean
    options?: boolean
    minCorrect?: boolean
    audio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["denverQuestion"]>

  export type DenverQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ageMonthMin?: boolean
    ageMonthMax?: boolean
    category?: boolean
    type?: boolean
    options?: boolean
    minCorrect?: boolean
    audio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["denverQuestion"]>

  export type DenverQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ageMonthMin?: boolean
    ageMonthMax?: boolean
    category?: boolean
    type?: boolean
    options?: boolean
    minCorrect?: boolean
    audio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["denverQuestion"]>

  export type DenverQuestionSelectScalar = {
    id?: boolean
    text?: boolean
    ageMonthMin?: boolean
    ageMonthMax?: boolean
    category?: boolean
    type?: boolean
    options?: boolean
    minCorrect?: boolean
    audio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DenverQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "ageMonthMin" | "ageMonthMax" | "category" | "type" | "options" | "minCorrect" | "audio" | "createdAt" | "updatedAt", ExtArgs["result"]["denverQuestion"]>

  export type $DenverQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DenverQuestion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      ageMonthMin: number
      ageMonthMax: number
      category: string
      type: string
      options: Prisma.JsonValue | null
      minCorrect: number | null
      audio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["denverQuestion"]>
    composites: {}
  }

  type DenverQuestionGetPayload<S extends boolean | null | undefined | DenverQuestionDefaultArgs> = $Result.GetResult<Prisma.$DenverQuestionPayload, S>

  type DenverQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DenverQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DenverQuestionCountAggregateInputType | true
    }

  export interface DenverQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DenverQuestion'], meta: { name: 'DenverQuestion' } }
    /**
     * Find zero or one DenverQuestion that matches the filter.
     * @param {DenverQuestionFindUniqueArgs} args - Arguments to find a DenverQuestion
     * @example
     * // Get one DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DenverQuestionFindUniqueArgs>(args: SelectSubset<T, DenverQuestionFindUniqueArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DenverQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DenverQuestionFindUniqueOrThrowArgs} args - Arguments to find a DenverQuestion
     * @example
     * // Get one DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DenverQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, DenverQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenverQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionFindFirstArgs} args - Arguments to find a DenverQuestion
     * @example
     * // Get one DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DenverQuestionFindFirstArgs>(args?: SelectSubset<T, DenverQuestionFindFirstArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenverQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionFindFirstOrThrowArgs} args - Arguments to find a DenverQuestion
     * @example
     * // Get one DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DenverQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, DenverQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DenverQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DenverQuestions
     * const denverQuestions = await prisma.denverQuestion.findMany()
     * 
     * // Get first 10 DenverQuestions
     * const denverQuestions = await prisma.denverQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const denverQuestionWithIdOnly = await prisma.denverQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DenverQuestionFindManyArgs>(args?: SelectSubset<T, DenverQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DenverQuestion.
     * @param {DenverQuestionCreateArgs} args - Arguments to create a DenverQuestion.
     * @example
     * // Create one DenverQuestion
     * const DenverQuestion = await prisma.denverQuestion.create({
     *   data: {
     *     // ... data to create a DenverQuestion
     *   }
     * })
     * 
     */
    create<T extends DenverQuestionCreateArgs>(args: SelectSubset<T, DenverQuestionCreateArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DenverQuestions.
     * @param {DenverQuestionCreateManyArgs} args - Arguments to create many DenverQuestions.
     * @example
     * // Create many DenverQuestions
     * const denverQuestion = await prisma.denverQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DenverQuestionCreateManyArgs>(args?: SelectSubset<T, DenverQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DenverQuestions and returns the data saved in the database.
     * @param {DenverQuestionCreateManyAndReturnArgs} args - Arguments to create many DenverQuestions.
     * @example
     * // Create many DenverQuestions
     * const denverQuestion = await prisma.denverQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DenverQuestions and only return the `id`
     * const denverQuestionWithIdOnly = await prisma.denverQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DenverQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, DenverQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DenverQuestion.
     * @param {DenverQuestionDeleteArgs} args - Arguments to delete one DenverQuestion.
     * @example
     * // Delete one DenverQuestion
     * const DenverQuestion = await prisma.denverQuestion.delete({
     *   where: {
     *     // ... filter to delete one DenverQuestion
     *   }
     * })
     * 
     */
    delete<T extends DenverQuestionDeleteArgs>(args: SelectSubset<T, DenverQuestionDeleteArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DenverQuestion.
     * @param {DenverQuestionUpdateArgs} args - Arguments to update one DenverQuestion.
     * @example
     * // Update one DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DenverQuestionUpdateArgs>(args: SelectSubset<T, DenverQuestionUpdateArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DenverQuestions.
     * @param {DenverQuestionDeleteManyArgs} args - Arguments to filter DenverQuestions to delete.
     * @example
     * // Delete a few DenverQuestions
     * const { count } = await prisma.denverQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DenverQuestionDeleteManyArgs>(args?: SelectSubset<T, DenverQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenverQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DenverQuestions
     * const denverQuestion = await prisma.denverQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DenverQuestionUpdateManyArgs>(args: SelectSubset<T, DenverQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenverQuestions and returns the data updated in the database.
     * @param {DenverQuestionUpdateManyAndReturnArgs} args - Arguments to update many DenverQuestions.
     * @example
     * // Update many DenverQuestions
     * const denverQuestion = await prisma.denverQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DenverQuestions and only return the `id`
     * const denverQuestionWithIdOnly = await prisma.denverQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends DenverQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, DenverQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DenverQuestion.
     * @param {DenverQuestionUpsertArgs} args - Arguments to update or create a DenverQuestion.
     * @example
     * // Update or create a DenverQuestion
     * const denverQuestion = await prisma.denverQuestion.upsert({
     *   create: {
     *     // ... data to create a DenverQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DenverQuestion we want to update
     *   }
     * })
     */
    upsert<T extends DenverQuestionUpsertArgs>(args: SelectSubset<T, DenverQuestionUpsertArgs<ExtArgs>>): Prisma__DenverQuestionClient<$Result.GetResult<Prisma.$DenverQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DenverQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionCountArgs} args - Arguments to filter DenverQuestions to count.
     * @example
     * // Count the number of DenverQuestions
     * const count = await prisma.denverQuestion.count({
     *   where: {
     *     // ... the filter for the DenverQuestions we want to count
     *   }
     * })
    **/
    count<T extends DenverQuestionCountArgs>(
      args?: Subset<T, DenverQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenverQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DenverQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DenverQuestionAggregateArgs>(args: Subset<T, DenverQuestionAggregateArgs>): Prisma.PrismaPromise<GetDenverQuestionAggregateType<T>>

    /**
     * Group by DenverQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenverQuestionGroupByArgs} args - Group by arguments.
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
      T extends DenverQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenverQuestionGroupByArgs['orderBy'] }
        : { orderBy?: DenverQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DenverQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenverQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DenverQuestion model
   */
  readonly fields: DenverQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DenverQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DenverQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DenverQuestion model
   */
  interface DenverQuestionFieldRefs {
    readonly id: FieldRef<"DenverQuestion", 'String'>
    readonly text: FieldRef<"DenverQuestion", 'String'>
    readonly ageMonthMin: FieldRef<"DenverQuestion", 'Float'>
    readonly ageMonthMax: FieldRef<"DenverQuestion", 'Float'>
    readonly category: FieldRef<"DenverQuestion", 'String'>
    readonly type: FieldRef<"DenverQuestion", 'String'>
    readonly options: FieldRef<"DenverQuestion", 'Json'>
    readonly minCorrect: FieldRef<"DenverQuestion", 'Int'>
    readonly audio: FieldRef<"DenverQuestion", 'String'>
    readonly createdAt: FieldRef<"DenverQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"DenverQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DenverQuestion findUnique
   */
  export type DenverQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter, which DenverQuestion to fetch.
     */
    where: DenverQuestionWhereUniqueInput
  }

  /**
   * DenverQuestion findUniqueOrThrow
   */
  export type DenverQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter, which DenverQuestion to fetch.
     */
    where: DenverQuestionWhereUniqueInput
  }

  /**
   * DenverQuestion findFirst
   */
  export type DenverQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter, which DenverQuestion to fetch.
     */
    where?: DenverQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenverQuestions to fetch.
     */
    orderBy?: DenverQuestionOrderByWithRelationInput | DenverQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenverQuestions.
     */
    cursor?: DenverQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenverQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenverQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenverQuestions.
     */
    distinct?: DenverQuestionScalarFieldEnum | DenverQuestionScalarFieldEnum[]
  }

  /**
   * DenverQuestion findFirstOrThrow
   */
  export type DenverQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter, which DenverQuestion to fetch.
     */
    where?: DenverQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenverQuestions to fetch.
     */
    orderBy?: DenverQuestionOrderByWithRelationInput | DenverQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenverQuestions.
     */
    cursor?: DenverQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenverQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenverQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenverQuestions.
     */
    distinct?: DenverQuestionScalarFieldEnum | DenverQuestionScalarFieldEnum[]
  }

  /**
   * DenverQuestion findMany
   */
  export type DenverQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter, which DenverQuestions to fetch.
     */
    where?: DenverQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenverQuestions to fetch.
     */
    orderBy?: DenverQuestionOrderByWithRelationInput | DenverQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DenverQuestions.
     */
    cursor?: DenverQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenverQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenverQuestions.
     */
    skip?: number
    distinct?: DenverQuestionScalarFieldEnum | DenverQuestionScalarFieldEnum[]
  }

  /**
   * DenverQuestion create
   */
  export type DenverQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * The data needed to create a DenverQuestion.
     */
    data: XOR<DenverQuestionCreateInput, DenverQuestionUncheckedCreateInput>
  }

  /**
   * DenverQuestion createMany
   */
  export type DenverQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DenverQuestions.
     */
    data: DenverQuestionCreateManyInput | DenverQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DenverQuestion createManyAndReturn
   */
  export type DenverQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many DenverQuestions.
     */
    data: DenverQuestionCreateManyInput | DenverQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DenverQuestion update
   */
  export type DenverQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * The data needed to update a DenverQuestion.
     */
    data: XOR<DenverQuestionUpdateInput, DenverQuestionUncheckedUpdateInput>
    /**
     * Choose, which DenverQuestion to update.
     */
    where: DenverQuestionWhereUniqueInput
  }

  /**
   * DenverQuestion updateMany
   */
  export type DenverQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DenverQuestions.
     */
    data: XOR<DenverQuestionUpdateManyMutationInput, DenverQuestionUncheckedUpdateManyInput>
    /**
     * Filter which DenverQuestions to update
     */
    where?: DenverQuestionWhereInput
    /**
     * Limit how many DenverQuestions to update.
     */
    limit?: number
  }

  /**
   * DenverQuestion updateManyAndReturn
   */
  export type DenverQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * The data used to update DenverQuestions.
     */
    data: XOR<DenverQuestionUpdateManyMutationInput, DenverQuestionUncheckedUpdateManyInput>
    /**
     * Filter which DenverQuestions to update
     */
    where?: DenverQuestionWhereInput
    /**
     * Limit how many DenverQuestions to update.
     */
    limit?: number
  }

  /**
   * DenverQuestion upsert
   */
  export type DenverQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * The filter to search for the DenverQuestion to update in case it exists.
     */
    where: DenverQuestionWhereUniqueInput
    /**
     * In case the DenverQuestion found by the `where` argument doesn't exist, create a new DenverQuestion with this data.
     */
    create: XOR<DenverQuestionCreateInput, DenverQuestionUncheckedCreateInput>
    /**
     * In case the DenverQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DenverQuestionUpdateInput, DenverQuestionUncheckedUpdateInput>
  }

  /**
   * DenverQuestion delete
   */
  export type DenverQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
    /**
     * Filter which DenverQuestion to delete.
     */
    where: DenverQuestionWhereUniqueInput
  }

  /**
   * DenverQuestion deleteMany
   */
  export type DenverQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenverQuestions to delete
     */
    where?: DenverQuestionWhereInput
    /**
     * Limit how many DenverQuestions to delete.
     */
    limit?: number
  }

  /**
   * DenverQuestion without action
   */
  export type DenverQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenverQuestion
     */
    select?: DenverQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenverQuestion
     */
    omit?: DenverQuestionOmit<ExtArgs> | null
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


  export const ParentScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const ChildScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dob: 'dob',
    createdAt: 'createdAt',
    parentId: 'parentId'
  };

  export type ChildScalarFieldEnum = (typeof ChildScalarFieldEnum)[keyof typeof ChildScalarFieldEnum]


  export const DenverQuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    ageMonthMin: 'ageMonthMin',
    ageMonthMax: 'ageMonthMax',
    category: 'category',
    type: 'type',
    options: 'options',
    minCorrect: 'minCorrect',
    audio: 'audio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DenverQuestionScalarFieldEnum = (typeof DenverQuestionScalarFieldEnum)[keyof typeof DenverQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    phoneNumber?: StringFilter<"Parent"> | string
    password?: StringFilter<"Parent"> | string
    firstName?: StringFilter<"Parent"> | string
    lastName?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    children?: ChildListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    children?: ChildOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    password?: StringFilter<"Parent"> | string
    firstName?: StringFilter<"Parent"> | string
    lastName?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    children?: ChildListRelationFilter
  }, "id" | "phoneNumber">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    phoneNumber?: StringWithAggregatesFilter<"Parent"> | string
    password?: StringWithAggregatesFilter<"Parent"> | string
    firstName?: StringWithAggregatesFilter<"Parent"> | string
    lastName?: StringWithAggregatesFilter<"Parent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
  }

  export type ChildWhereInput = {
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    id?: StringFilter<"Child"> | string
    firstName?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dob?: DateTimeFilter<"Child"> | Date | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    parentId?: StringFilter<"Child"> | string
    parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
  }

  export type ChildOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
    parent?: ParentOrderByWithRelationInput
  }

  export type ChildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    firstName?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dob?: DateTimeFilter<"Child"> | Date | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    parentId?: StringFilter<"Child"> | string
    parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
  }, "id">

  export type ChildOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
    _count?: ChildCountOrderByAggregateInput
    _max?: ChildMaxOrderByAggregateInput
    _min?: ChildMinOrderByAggregateInput
  }

  export type ChildScalarWhereWithAggregatesInput = {
    AND?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    OR?: ChildScalarWhereWithAggregatesInput[]
    NOT?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Child"> | string
    firstName?: StringWithAggregatesFilter<"Child"> | string
    lastName?: StringWithAggregatesFilter<"Child"> | string
    dob?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    parentId?: StringWithAggregatesFilter<"Child"> | string
  }

  export type DenverQuestionWhereInput = {
    AND?: DenverQuestionWhereInput | DenverQuestionWhereInput[]
    OR?: DenverQuestionWhereInput[]
    NOT?: DenverQuestionWhereInput | DenverQuestionWhereInput[]
    id?: StringFilter<"DenverQuestion"> | string
    text?: StringFilter<"DenverQuestion"> | string
    ageMonthMin?: FloatFilter<"DenverQuestion"> | number
    ageMonthMax?: FloatFilter<"DenverQuestion"> | number
    category?: StringFilter<"DenverQuestion"> | string
    type?: StringFilter<"DenverQuestion"> | string
    options?: JsonNullableFilter<"DenverQuestion">
    minCorrect?: IntNullableFilter<"DenverQuestion"> | number | null
    audio?: StringNullableFilter<"DenverQuestion"> | string | null
    createdAt?: DateTimeFilter<"DenverQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"DenverQuestion"> | Date | string
  }

  export type DenverQuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    category?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    minCorrect?: SortOrderInput | SortOrder
    audio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenverQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DenverQuestionWhereInput | DenverQuestionWhereInput[]
    OR?: DenverQuestionWhereInput[]
    NOT?: DenverQuestionWhereInput | DenverQuestionWhereInput[]
    text?: StringFilter<"DenverQuestion"> | string
    ageMonthMin?: FloatFilter<"DenverQuestion"> | number
    ageMonthMax?: FloatFilter<"DenverQuestion"> | number
    category?: StringFilter<"DenverQuestion"> | string
    type?: StringFilter<"DenverQuestion"> | string
    options?: JsonNullableFilter<"DenverQuestion">
    minCorrect?: IntNullableFilter<"DenverQuestion"> | number | null
    audio?: StringNullableFilter<"DenverQuestion"> | string | null
    createdAt?: DateTimeFilter<"DenverQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"DenverQuestion"> | Date | string
  }, "id">

  export type DenverQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    category?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    minCorrect?: SortOrderInput | SortOrder
    audio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DenverQuestionCountOrderByAggregateInput
    _avg?: DenverQuestionAvgOrderByAggregateInput
    _max?: DenverQuestionMaxOrderByAggregateInput
    _min?: DenverQuestionMinOrderByAggregateInput
    _sum?: DenverQuestionSumOrderByAggregateInput
  }

  export type DenverQuestionScalarWhereWithAggregatesInput = {
    AND?: DenverQuestionScalarWhereWithAggregatesInput | DenverQuestionScalarWhereWithAggregatesInput[]
    OR?: DenverQuestionScalarWhereWithAggregatesInput[]
    NOT?: DenverQuestionScalarWhereWithAggregatesInput | DenverQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DenverQuestion"> | string
    text?: StringWithAggregatesFilter<"DenverQuestion"> | string
    ageMonthMin?: FloatWithAggregatesFilter<"DenverQuestion"> | number
    ageMonthMax?: FloatWithAggregatesFilter<"DenverQuestion"> | number
    category?: StringWithAggregatesFilter<"DenverQuestion"> | string
    type?: StringWithAggregatesFilter<"DenverQuestion"> | string
    options?: JsonNullableWithAggregatesFilter<"DenverQuestion">
    minCorrect?: IntNullableWithAggregatesFilter<"DenverQuestion"> | number | null
    audio?: StringNullableWithAggregatesFilter<"DenverQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DenverQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DenverQuestion"> | Date | string
  }

  export type ParentCreateInput = {
    id?: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    children?: ChildCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    children?: ChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ChildUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
    parent?: ParentCreateNestedOneWithoutChildrenInput
  }

  export type ChildUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
    parentId: string
  }

  export type ChildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneWithoutChildrenNestedInput
  }

  export type ChildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type ChildCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
    parentId: string
  }

  export type ChildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type DenverQuestionCreateInput = {
    id: string
    text: string
    ageMonthMin: number
    ageMonthMax: number
    category: string
    type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: number | null
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DenverQuestionUncheckedCreateInput = {
    id: string
    text: string
    ageMonthMin: number
    ageMonthMax: number
    category: string
    type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: number | null
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DenverQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ageMonthMin?: FloatFieldUpdateOperationsInput | number
    ageMonthMax?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenverQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ageMonthMin?: FloatFieldUpdateOperationsInput | number
    ageMonthMax?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenverQuestionCreateManyInput = {
    id: string
    text: string
    ageMonthMin: number
    ageMonthMax: number
    category: string
    type: string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: number | null
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DenverQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ageMonthMin?: FloatFieldUpdateOperationsInput | number
    ageMonthMax?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenverQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ageMonthMin?: FloatFieldUpdateOperationsInput | number
    ageMonthMax?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    minCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    audio?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ChildListRelationFilter = {
    every?: ChildWhereInput
    some?: ChildWhereInput
    none?: ChildWhereInput
  }

  export type ChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
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

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type ChildCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type ChildMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type ChildMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DenverQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    category?: SortOrder
    type?: SortOrder
    options?: SortOrder
    minCorrect?: SortOrder
    audio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenverQuestionAvgOrderByAggregateInput = {
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    minCorrect?: SortOrder
  }

  export type DenverQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    category?: SortOrder
    type?: SortOrder
    minCorrect?: SortOrder
    audio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenverQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    category?: SortOrder
    type?: SortOrder
    minCorrect?: SortOrder
    audio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenverQuestionSumOrderByAggregateInput = {
    ageMonthMin?: SortOrder
    ageMonthMax?: SortOrder
    minCorrect?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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
  }

  export type ChildCreateNestedManyWithoutParentInput = {
    create?: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput> | ChildCreateWithoutParentInput[] | ChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutParentInput | ChildCreateOrConnectWithoutParentInput[]
    createMany?: ChildCreateManyParentInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type ChildUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput> | ChildCreateWithoutParentInput[] | ChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutParentInput | ChildCreateOrConnectWithoutParentInput[]
    createMany?: ChildCreateManyParentInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChildUpdateManyWithoutParentNestedInput = {
    create?: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput> | ChildCreateWithoutParentInput[] | ChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutParentInput | ChildCreateOrConnectWithoutParentInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutParentInput | ChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ChildCreateManyParentInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutParentInput | ChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutParentInput | ChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type ChildUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput> | ChildCreateWithoutParentInput[] | ChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutParentInput | ChildCreateOrConnectWithoutParentInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutParentInput | ChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ChildCreateManyParentInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutParentInput | ChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutParentInput | ChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type ParentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildrenInput
    connect?: ParentWhereUniqueInput
  }

  export type ParentUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildrenInput
    upsert?: ParentUpsertWithoutChildrenInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutChildrenInput, ParentUpdateWithoutChildrenInput>, ParentUncheckedUpdateWithoutChildrenInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
  }

  export type ChildCreateWithoutParentInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
  }

  export type ChildUncheckedCreateWithoutParentInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
  }

  export type ChildCreateOrConnectWithoutParentInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput>
  }

  export type ChildCreateManyParentInputEnvelope = {
    data: ChildCreateManyParentInput | ChildCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ChildUpsertWithWhereUniqueWithoutParentInput = {
    where: ChildWhereUniqueInput
    update: XOR<ChildUpdateWithoutParentInput, ChildUncheckedUpdateWithoutParentInput>
    create: XOR<ChildCreateWithoutParentInput, ChildUncheckedCreateWithoutParentInput>
  }

  export type ChildUpdateWithWhereUniqueWithoutParentInput = {
    where: ChildWhereUniqueInput
    data: XOR<ChildUpdateWithoutParentInput, ChildUncheckedUpdateWithoutParentInput>
  }

  export type ChildUpdateManyWithWhereWithoutParentInput = {
    where: ChildScalarWhereInput
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyWithoutParentInput>
  }

  export type ChildScalarWhereInput = {
    AND?: ChildScalarWhereInput | ChildScalarWhereInput[]
    OR?: ChildScalarWhereInput[]
    NOT?: ChildScalarWhereInput | ChildScalarWhereInput[]
    id?: StringFilter<"Child"> | string
    firstName?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dob?: DateTimeFilter<"Child"> | Date | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    parentId?: StringFilter<"Child"> | string
  }

  export type ParentCreateWithoutChildrenInput = {
    id?: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type ParentUncheckedCreateWithoutChildrenInput = {
    id?: string
    phoneNumber: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type ParentCreateOrConnectWithoutChildrenInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
  }

  export type ParentUpsertWithoutChildrenInput = {
    update: XOR<ParentUpdateWithoutChildrenInput, ParentUncheckedUpdateWithoutChildrenInput>
    create: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutChildrenInput, ParentUncheckedUpdateWithoutChildrenInput>
  }

  export type ParentUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildCreateManyParentInput = {
    id?: string
    firstName: string
    lastName: string
    dob: Date | string
    createdAt?: Date | string
  }

  export type ChildUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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