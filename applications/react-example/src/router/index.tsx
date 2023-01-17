import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import HomePage from '../views/HomePage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'a',
        element: <div>Page A</div>
      },
      {
        path: 'b',
        element: <div>Page B</div>
      }
    ]
  },
  {
    path: '/login',
    element: <div>Login</div>
  }
]

export default createBrowserRouter(routes)
