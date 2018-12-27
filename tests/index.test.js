import Vue from 'vue'

import { Reol } from 'reol/index'
import { Room } from 'reol/components'

@Room('NoRoom')
class MainRoom {
  mounted () {
    // this.on('click', loadScript())
  }

  update () {

  }

  created () {
    return `<div></div>`
  }
}

const mainRoom = new MainRoom()

it('reol should init success', () => {
  expect(mainRoom._id).toBeDefined()
  expect(typeof mainRoom._id).toBe('number')
  expect(mainRoom._id).toBe(0) // First Created

  expect(mainRoom.roomName).toBe('NoRoom')
  expect(MainRoom.prototype.roomName).toBe('NoRoom')
})

it('should have MainRoom component', function () {
  const MainRoomComponent = Vue.component(mainRoom.roomName)
  expect(MainRoomComponent).toBeDefined()
})
