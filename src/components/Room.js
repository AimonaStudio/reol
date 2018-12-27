import Vue from 'vue'
import { idMaker } from "../utils"

export default function Room (name) {
  return function (target) {
    return class extends target {
      constructor () {
        super()
        this._id = idMaker().next().value
        this.roomName = name || target.name
        Vue.component(this.roomName, {
          render () {
            return (this.created())
          }
        })
      }
    }
  }
}
