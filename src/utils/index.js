export function* idMaker () {
  let idx = 0
  while (true)
    yield idx++
}
