const {modulesToTranspile} = require('../../config')
module.exports = (api) => {
  // @Note: Next.js only loads .babelrc for its local repo.
  // Use 'babel.config.js' so Next.js will load it for sibling repos using Yarn workspace.

  api.cache(false) // set cache as true/false

  return {
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          'legacy': true
        }
      ],
      'lodash',
    ],
    presets: [
      'next/babel'
    ],
    ignore: [
      // this duplicated declaration from next.config.js produces slightly smaller bundle
      new RegExp(`node_modules/(?!(${modulesToTranspile.join('|')})/)`)
    ],
  }
}
