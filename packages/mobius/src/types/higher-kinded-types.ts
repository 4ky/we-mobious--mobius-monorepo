import type { GetObjKeys, GetObjValues } from './object'
import type { Push } from './tuple'

/**
 * Higher Kinded Type (HKT) is a type that takes another type as a parameter.
 * We can't really express this in TypeScript, but we can simulate it.
 * Here the `HKT` is a representation of a higher kinded type.
 */
export interface HKT {
  order: number
  // eslint-disable-next-line typescript/ban-types -- for count
  _parameters: {}
  parameters: Record<number, unknown>
  readonly exactType: unknown
}

export type GetExactType<F extends HKT> = F['exactType']

export type StepKind<F extends HKT, Parameter> = HKT['order'] extends 0
  ? GetExactType<F>
  : Push<GetObjKeys<F['_parameters']>>['length'] extends F['order']
    ? GetExactType<(F & {
      parameters: [...GetObjValues<F['_parameters']>, Parameter]
    })>
    : (F & {
        _parameters: {
          [K in GetObjKeys<F['_parameters']>['length']]: Parameter
        }
      })

export type Kind<F extends HKT, Parameters extends unknown[] = []> = Parameters extends []
  ? F
  : Parameters extends [infer Parameter, ...infer Remaining]
    ? StepKind<F, Parameter> extends (infer StepKindedF)
      // TODO: can not correctly handle HKT of HKT
      ? StepKindedF extends HKT
        ? Remaining extends []
          ? StepKindedF
          : Kind<StepKindedF, Remaining>
        : StepKindedF
      : never
    : never
