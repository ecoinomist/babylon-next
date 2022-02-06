console.log(`⚡ Compiling in '${process.env.NODE_ENV}' mode...`)
const __TEST__ = process.env.NODE_ENV === 'test'
const modulesToTranspile = [
  'core',
  'client',
  // 'validator', // importing ES6 code for tree shaking
]

/**
 * Babylon js is only needed in frontend.
 * next@10.2.3 with next-transpile-modules@7.3.0 must have this disabled
 * use dynamic import instead to avoid rendering Babylon server side and slowing down development.
 */
if (__TEST__) modulesToTranspile.push('@babylonjs') // required for Jest test

module.exports = {
  modulesToTranspile
}
