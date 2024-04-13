import { test, expect } from 'vitest'

import { mobius, sum } from '@/index'

test('mobius', () => {
  expect(mobius()).toBe('mobius')
  expect(sum(1, 2)).toBe(3)
})
