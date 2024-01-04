import { Divider, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

export const menuItems: MenuProps['items'] = [
  getItem(<Link to="/a">Page A</Link>, '/a'),
  getItem(<Link to="/b">Page B</Link>, '/b')
]

interface SidebarNavProps {
  header: React.ReactNode
  footer?: React.ReactNode
}

const SidebarNav = (props: SidebarNavProps) => {
  const location = useLocation()
  return (
    <div className='h-screen w-50 flex flex-row overflow-auto'>
      <div className='h-full grow py-4 flex flex-col'>
        { props.header }
        <Divider />
        <Menu
          className='overflow-auto'
          items={ menuItems }
          mode="inline"
          selectedKeys={ [location.pathname] }
          style={ { borderInlineEnd: 'initial' } }
        />
        <div className='grow'></div>
        { props.footer !== undefined ? <Divider /> : null }
        { props.footer }
      </div>
      <Divider className='h-full mx-0!' type='vertical' />
    </div>
  )
}

export default SidebarNav
