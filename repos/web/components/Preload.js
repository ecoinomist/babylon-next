import NextLink from 'next/link'

/**
 * Preload Script for given Route without rendering (only works in Next.js production)
 * @param {String} to - pathname of the route to preload scripts for
 * @param {Object} [props] - other next Link options
 */
export default function Preload ({to, ...props}) {
  // Next Link expects a native element with ref, and it has to render as HTML element to trigger preload
  return <NextLink href={to} {...props}><i style={style}/></NextLink>
}

const style = {
  position: 'absolute',
  width: 0,
  height: 0,
}
