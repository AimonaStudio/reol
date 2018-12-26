import { idMaker } from "../utils"

export default function Room (target) {
  target.prototype._id = idMaker().next().value
  target.prototype.name = target.name || `${target._id}Room`
  target.prototype.render = (h) => {
    return h(target.created())
  }
}
