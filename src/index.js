import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Wrapper.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>
)