module.exports = (api) => {
  // @Note: Next.js only loads its local repo '.babelrc' or 'babel.config.js'.
  // This 'babel.config.js' is loaded by global Jest test automatically.

  api.cache(false)

  return {
    presets: [
      'next/babel'
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          'legacy': true
        }
      ],
      /**
       * GraphQL import
       *  for Next.js - configure inside next.config.js
       */
      // 'import-graphql', // for CRA - requires 'graphql' and 'babel-plugin-import-graphql' packages
    ],
    babelrcRoots: [
      // Keep the root as a root
      '.',

      // Also consider monorepo packages "root" and load their .babelrc files.
      './repos/*'
    ],

    // May be required for babel to transform packages outside of current working directory (for each repo)
    // @Note: commented out because:
    //  - Jest test uses `transformIgnorePatterns` inside jest.config.js
    //  - Next.js uses its own next.config.js to exclude ignore node_modules
    //  - Nodemon for GQL server uses local babel.config.js with custom ignore patterns:
    //    new RegExp(`node_modules/(?!(${modulesToTranspile.join('|')})/)`)
    // ignore: [
    //   /node_modules\/(?!(package-name1|package-name2)\/)/
    // ],
  }
}
