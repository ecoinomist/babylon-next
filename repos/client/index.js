import * as core from 'core' // init core first

/**
 * EXPORTS =====================================================================
 * Modules' Exposing API - to enable consistent and maintainable app integration
 * =============================================================================
 */
const sideEffects = {core} // prevent webpack tree shaking in prod

/* Activated Modules */
const clientModules = [
]

export default clientModules
