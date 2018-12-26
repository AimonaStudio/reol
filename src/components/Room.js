import { idMaker } from "../utils"

export default function Room (target) {
  target._id = idMaker()
  const t = target.created() // todo
  const roomName = target.name || `${target._id}-Room`
  return {
    name: roomName,
    render () {
      return (t)
    }
  }
}
