import { StrictMode } from 'react'

import { Counter } from '../components/Counter'

export const Example = (): JSX.Element => <div>This is, in fact, a div!</div>

export const App = (): JSX.Element => {
  return (
    /**
     * @see {@link https://beta.reactjs.org/reference/react/StrictMode#strictmode}
     */
    <StrictMode>
      <Example />

      <Counter />
    </StrictMode>
  )
}
