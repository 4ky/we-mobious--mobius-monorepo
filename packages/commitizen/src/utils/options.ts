
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- necessary
type AnyFunction = (...args: any[]) => any
export type IsFunction<T> = T extends AnyFunction ? true : false

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- necessary
export type AnyRecord = Record<string | number | symbol, any>
export type IsRecord<T> = T extends AnyRecord ? true : false

export type IsUndefinedable<T> = T extends Exclude<T, undefined> ? false : true
export type IsNullable<T> = T extends Exclude<T, null> ? false : true
export type IsNilable<T> = T extends Exclude<T, null | undefined> ? false : true
export type NonUndefinedable<T> = Exclude<T, undefined>
export type NonNullable<T> = Exclude<T, null>
export type NonNilable<T> = Exclude<T, null | undefined>
export type ExcludeUndefined<T> = Exclude<T, undefined>
export type ExcludeNil<T> = Exclude<T, null | undefined>
export type ExcludeNull<T> = Exclude<T, null>

/**
 * 用于对 options 进行预处理，基本规则如下：
 *
 * - 所有的可选配置项都应该拥有默认值
 * - 所有可选配置项在没有指定值的时候都 fallback 到默认值
 * - 所有可选配置项可以通过显式指定 `undefined` 来 fallback 到默认值
 * - 预处理后的所有配置项都是有值的，使用的时候不需要进行 `undefined` 判断
 * - 如果确实有配置项需要传递“没有值”的语义，请使用 `null` 或 `"unknown"` 等方案
 */
export type Prepared<T> = {
  // NOTE: `(T[K] extends ExcludeUndefined<T[K]> ? false : true)` can't be replaced with `IsUndefinedable<T[K]>`
  [K in keyof T]-?: (T[K] extends ExcludeUndefined<T[K]> ? false : true) extends true ? (
    // T[K] contains `undefined`
    (T[K] extends ExcludeNull<T[K]> ? false : true) extends true ? (
      // T[K] contains `undefined` and `null`
      // Q: why check `IsFunction` before `IsRecord`?
      // A: This check logic is designed for `ProxyConfigurationFunction` type, which is a function defined in `interface` approach.
      IsFunction<ExcludeNil<T[K]>> extends true ? (
        ExcludeNil<T[K]> | null
      ) : (
        IsRecord<ExcludeNil<T[K]>> extends true ? (
        // Prepared<ExcludeNil<T[K]>> | null
        // @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
          T[K] extends unknown ? Prepared<ExcludeNil<T[K]>> | null : never
        ) : (
          ExcludeUndefined<T[K]>
        )
      )
    ) : (
      // T[K] contains `undefined` but not `null`
      IsFunction<ExcludeUndefined<T[K]>> extends true ? (
        ExcludeUndefined<T[K]>
      ) : (
        IsRecord<ExcludeUndefined<T[K]>> extends true ? (
        // Prepared<ExcludeUndefined<T[K]>>
          T[K] extends unknown ? Prepared<ExcludeUndefined<T[K]>> : never
        ) : (
          ExcludeUndefined<T[K]>
        )
      )
    )
  ) : (
    // T[K] does not contain `undefined`
    (T[K] extends ExcludeNull<T[K]> ? false : true) extends true ? (
      // T[K] contains `null` but not `undefined`
      IsFunction<ExcludeNull<T[K]>> extends true ? (
        T[K]
      ) : (
        IsRecord<ExcludeNull<T[K]>> extends true ? (
        // Prepared<ExcludeNull<T[K]>> | null
          T[K] extends unknown ? Prepared<ExcludeNull<T[K]>> | null : never
        ) : (
          T[K]
        )
      )
    ) : (
      // T[K] does not contain `undefined` and `null`
      IsFunction<T[K]> extends true ? (
        T[K]
      ) : (
        IsRecord<T[K]> extends true ? (
          // Prepared<T[K]>
          T[K] extends unknown ? Prepared<T[K]> : never
        ) : (
          T[K]
        )
      )
    )
  )
}

export interface PlainObject {
  [key: string]: unknown
  [key: number]: unknown
  [key: symbol]: unknown
}
/**
 * Predicate whether the targetget is a plain object.
 *
 * A plain object is an object that is:
 *  - not `null`, not a `function`, not a `primitive` type,
 *  - not an `Array`, not a `RegExp`, not a `Date`, not a `Map`, not a `Set`, not a `WeakMap`,
 *  - not `window`, not a DOM `element`, not an `Error`,
 *  - not any other customize object type.
 *
 * @see {@link isObject}, {@link isGeneralObject}
 */
export const isPlainObject = (target: unknown): target is PlainObject => {
  // 非 null、非 Function、非原始类型
  if (target === null || typeof target !== 'object') {
    return false
  }
  // 非 Array、非 Regexp、非 Date、非 Map、非 Set、非 Window、非 DOM、非 Error……
  if (Object.prototype.toString.call(target) !== '[object Object]') {
    return false
  }
  // 非其它自定义类实例对象
  let proto = target
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  if (Object.getPrototypeOf(target) === proto) {
    return true
  } else {
    return false
  }
}
/**
 * @see {@link Array.isArray}
 */
export function isArray <T> (target: T[]): target is T[]
export function isArray <T> (target: unknown): target is T[]
export function isArray <T> (target: unknown): target is T[] { return Array.isArray(target) }

/**
 * Merge source on target.
 */
export const mergeOptions = <T>(target: T, source: T): T => {
  if (!isPlainObject(target) || !isPlainObject(source)) {
    return target
  }
  const keysInTarget = Object.keys(target)
  const keysInSource = Object.keys(source)
  const allKeys = [...new Set([...keysInTarget, ...keysInSource])]
  const result = {} as unknown as T

  for (const key of allKeys) {
    const valueInTarget = target[key]
    const valueInSource = source[key]
    if (valueInTarget === undefined && valueInSource !== undefined) {
      result[key as keyof T] = valueInSource as T[keyof T]
    } else if (valueInTarget !== undefined && valueInSource === undefined) {
      result[key as keyof T] = valueInTarget as T[keyof T]
    } else if (valueInTarget !== undefined && valueInSource !== undefined) {
      if (isPlainObject(valueInTarget) && isPlainObject(valueInSource)) {
        result[key as keyof T] = mergeOptions(valueInTarget, valueInSource) as unknown as T[keyof T]
      } else {
        result[key as keyof T] = valueInSource as T[keyof T]
      }
    }
  }
  return result
}
