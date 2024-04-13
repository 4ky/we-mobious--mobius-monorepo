// 判断是否为 never 的类型工具
type IsNever<T> = [T] extends [never] ? true : false

// 用于判断两个泛型是否相同，只要一个泛型传入 Len, 零一个泛型传入 number，就能判断 Len 是否为 number 本身
type IsTypeSelf<TA, TB> = TA extends TB ? TB extends TA ? true : false : false

// 判断 Len 是否为合法的 number 字面量类型
type IsLiteralNumber<N> = IsNever<N> extends true ? false : IsTypeSelf<number, N> extends true ? false : true

type FixedArray<T, Len extends number, List extends T[] = []> =
    IsLiteralNumber<Len> extends false
      ? List
      : List['length'] extends Len // 判断 `List['length']` 是否等于 `Len`
        ? List // 是就返回 List 本身
        : FixedArray<T, Len, [...List, T]> // 不是就递归，注意传入的数组添加了新的元素 T

export type FixedLengthArray<Len extends number> = FixedArray<unknown, Len>
