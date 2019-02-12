module.exports = {
  'plugins': [
    'react'
  ],
  'extends': [
    'standard',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'jsx-quotes': [2, 'prefer-single']
  }
}
