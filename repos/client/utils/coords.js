import { Vector3 } from '../babylon'

/**
 * Get Vector3 for Babylon.js from right handed system with z-up vector floats
 *
 * @param {Number[]|Array<Number>|Array<x, y, z>} vector3 array from right handed system with z-up - [x, y, z]
 * @returns {Vector3} vector3 - for left handed system and y-up (i.e. Babylon.js)
 */
export function v3 ([x = 0, y = 0, z = 0] = []) {
  return new Vector3(x, z, y)
}

