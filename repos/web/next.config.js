// @Note: next.config.js gets loaded once at the start, then babel.config.js (loaded repeatedly)
const {withPlugins, optional} = require('next-compose-plugins')
const {PHASE_PRODUCTION_SERVER} = require('next/constants')
let {modulesToTranspile} = require('../../config')
modulesToTranspile = modulesToTranspile.filter(v => v !== '@babylonjs')
const clientEnvs = {}
for (const key in process.env) {
  if (key.indexOf('REACT_APP_') === 0) clientEnvs[key] = process.env[key]
}

/** Tested with Next.js v10.2.3 Webpack v4.4.1 */
module.exports = withPlugins(
  /** IMPORTANT: the order of plugins matter! */
  [
    /* Must be the first plugin (to work with decorator {legacy: true}) */
    [optional(() => require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })({})), {}, ['!', PHASE_PRODUCTION_SERVER]],

    /* Webpack configuration must go here */
    [optional(() => require('next-transpile-modules')(modulesToTranspile)), {
      /**
       * The webpack function is executed twice, once for the server and once for the client.
       * @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
       */
      // webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
      //   config.module.rules.push({
      //     test: /\.(graphql|gql)$/,
      //     loader: 'graphql-tag/loader', // works with fragment #import
      //   })
      //   return config
      // },
    }, ['!', PHASE_PRODUCTION_SERVER]],
  ],

  /** next.config.js configuration */
  {
    // @note: 'next-compose-plugins' has a bug and does not call webpack(config) here
    // @see: https://github.com/cyrilwanner/next-compose-plugins/issues/41
    /**
     * Next.js does not automatically reload .env variables, changes require restart.
     * For Security reasons, Next.js does not export process.env to client side.
     * Manually export all envs starting with `REACT_APP_*` to sync with CRA best practices
     */
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      ...clientEnvs,
    },
    /**
     * @see: https://nextjs.org/docs/advanced-features/i18n-routing
     */
    i18n: {
      locales: ['en', 'fr', 'ru'],
      defaultLocale: 'en',
    },
    /**
     * @see: https://nextjs.org/docs/api-reference/next.config.js/rewrites
     */
    // // Not needed
    // async rewrites () {
    //   return {
    //     // These rewrites are checked after both pages/public files
    //     // and dynamic routes are checked
    //     fallback: [
    //       { // Rewrite everything else to use `pages/spa.js` Single Page Application
    //         source: '/:path*',
    //         destination: '/spa',
    //       },
    //     ]
    //   }
    // },
  }
)
