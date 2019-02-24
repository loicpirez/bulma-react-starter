import { addLocaleData } from 'react-intl'
import * as serviceWorker from './utils/service-worker'
import App from './components/App'
import localeEn from 'react-intl/locale-data/en'
import localeFr from 'react-intl/locale-data/fr'
import localeZh from 'react-intl/locale-data/zh'
import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import rootSaga from './sagas'
import reducers from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

addLocaleData([
  ...localeEn,
  ...localeFr,
  ...localeZh
])

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
