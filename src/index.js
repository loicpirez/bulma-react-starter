import { addLocaleData } from 'react-intl'
import * as serviceWorker from './utils/service-worker'
import App from './components/App'
import localeEn from 'react-intl/locale-data/en'
import localeFr from 'react-intl/locale-data/fr'
import localeZh from 'react-intl/locale-data/zh'
import React from 'react'
import ReactDOM from 'react-dom'

addLocaleData([
  ...localeEn,
  ...localeFr,
  ...localeZh
])

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
