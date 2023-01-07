
// eslint-disable-next-line import/no-unassigned-import -- import css
import './statics/styles/reset.css'
// eslint-disable-next-line import/no-unassigned-import -- import css
import 'virtual:uno.css'
// eslint-disable-next-line import/no-unassigned-import -- import css
import './statics/styles/styles.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './views/App'

const rootNode = document.getElementById('app')!
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(App))
