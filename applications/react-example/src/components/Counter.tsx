import { useState } from 'react'

import { Count } from '../elements/Count'
import { add, stepNumber } from '../services/math'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = (): void => {
    const newCount = add(count, stepNumber)
    setCount(newCount)
  }

  return (
    <div>
      <Count count={ count } />

      <div className='block w-20 h-20 text-blue i-ri-account-circle-fill'></div>

      <button className='bg-green-600' type="button" onClick={ handleIncrement }>Increment</button>
    </div>
  )
}
