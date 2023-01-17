import { StrictMode } from 'react'
import {
  RouterProvider
} from 'react-router-dom'

import router from '../router'

export const App = () => {
  return (
    /**
     * @see {@link https://beta.reactjs.org/reference/react/StrictMode#strictmode}
     */
    <StrictMode>
      <RouterProvider router={ router } />
    </StrictMode>
  )
}
