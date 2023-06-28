import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  {/* <Provider store={store}> */}
    <App />
  {/* </Provider> */}
  {/* </React.StrictMode> */}
  </Provider>
)
   