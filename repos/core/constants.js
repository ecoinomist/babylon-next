/* Environment Variables */
export let ENV = typeof process !== 'undefined' ? process.env : {}
if (!Object.keys(ENV).length) {
  // Must create dynamic require using process.env as condition to avoid error in CRA
  ENV = require('./_envsNext') || {}
}
export const NODE_ENV = ENV.NODE_ENV // @Note: Next.js does not automatically add NODE_ENV, set inside next.config.js
export const __PROD__ = NODE_ENV === 'production'
export const __TEST__ = NODE_ENV === 'test'
export const __DEV__ = NODE_ENV === 'development'
export const __CLIENT__ = typeof window !== 'undefined'
export const __BACKEND__ = !__CLIENT__
