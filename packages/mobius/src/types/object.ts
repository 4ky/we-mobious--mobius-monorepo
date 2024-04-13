import type { UnionToTuple } from './union-to-tuple'

export type GetObjKeys<O> = UnionToTuple<keyof O> extends infer R ? (R extends unknown[] ? R : never) : never

export type GetObjValues<O> = UnionToTuple<O[keyof O]> extends infer R ? (R extends unknown[] ? R : never) : never
