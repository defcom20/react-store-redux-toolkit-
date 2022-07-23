import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import PokemnApp from './PokemonApp'

import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <PokemnApp />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
)
