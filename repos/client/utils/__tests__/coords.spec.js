import { Vector3 } from '../../babylon'
import { v3 } from '../coords'

describe(`${v3.name}`, () => {
  it(`returns correct Vector3 for left handed system with y axis up`, () => {
    expect(v3([0, 0, 1])).toEqual(new Vector3(0, 1, 0))
  })
})
