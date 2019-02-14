/**
 * Project's customized Webpack Configuration Extension
 * ----------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */

const path = require('path')

module.exports = (webpackConfig, env, { paths }) => {
  let alias = webpackConfig.resolve.alias
  alias = {
    '_variables.sass': path.resolve(__dirname, 'src/theme/bulma-override.sass'),
    ...alias
  }
  webpackConfig.resolve.alias = alias
  return webpackConfig
}
