import { Outlet } from 'react-router'

import SidebarNav from './SidebarNav'

function HomePage () {
  return (
    <div className='flex w-full flex-row'>
      <SidebarNav footer={ <div>footer</div> } header={ <div>header</div> } />
      <div className='grow'>
        <Outlet />
      </div>
    </div>
  )
}

export default HomePage
