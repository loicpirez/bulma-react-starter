import detectBrowserLanguage from 'detect-browser-language'

const getLocale = () => {
  if (window.localStorage.getItem('language_preference') === null) {
    let locale = 'en'
    const detectedLanguage = detectBrowserLanguage()
    if (detectedLanguage.startsWith('fr-')) {
      locale = 'fr'
    }
    window.localStorage.setItem('language_preference', locale)
    return locale
  } else {
    return window.localStorage.getItem('language_preference')
  }
}

export default getLocale
