import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore'
import { verifyCredentials } from './state/actions/reduxTokenAuthConfig'
import './index.css'

const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));

serviceWorker.unregister()