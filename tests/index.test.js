import { Reol } from 'reol/index'
import { Room } from 'reol/components'

@Room
class MainRoom {
  constructor (conf) {
    this.name = 'MainRoom'
  }

  mounted () {
    // this.on('click', loadScript())
  }

  update () {

  }

  created () {
    return `<div></div>`
  }
}

it('reol should init success', () => {
  const mainRoom = new MainRoom()
  expect(mainRoom._id).toBeDefined()
  expect(typeof mainRoom._id).toBe('number')
  expect(mainRoom._id).toBe(0) // First Created

  expect(mainRoom.name).toBe('MainRoom')
})
