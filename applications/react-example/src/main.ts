import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './views/App'

const rootNode = document.getElementById('app')!
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(App))
