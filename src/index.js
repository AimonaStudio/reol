import app from './core/core'
import * as Components from './components'

// todo
class Reol {
  constructor (conf = {}) {
    const { rooms, scripts, } = conf
    this._initRooms(rooms)
    this._initScripts(scripts)
  }

  _initRooms (rooms) {
    for (const k in rooms) {
      const room = rooms[k]
      // todo
    }
  }

  _initScripts (scripts) {
    for (const k in scripts) {
      const script = scripts[k]
      // todo
    }
  }

  bind (ele) {

  }
}

export { Reol, Components }
