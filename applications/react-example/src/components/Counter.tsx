import { useState } from 'react'

import { Count } from '../elements/Count'
import { add, stepNumber } from '../services/math'

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0)
  const handleIncrement = (): void => {
    const newCount = add(count, stepNumber)
    setCount(newCount)
  }

  return (
    <div>
      <Count count={ count } />

      <button className='bg-red-500' type="button" onClick={ handleIncrement }>Increment</button>
    </div>
  )
}
