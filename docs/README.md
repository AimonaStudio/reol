# Reol-Engine 设计思路

我们可以用以下方式来搭建我们的游戏

> 以下代码仅供提供思路和参考

```js
// room1.js
import { Room } from 'reol-engine'

export class MainRoom extends Room {
  created (reol) {
    this.name = 'Welcome'
    return (<Room>
    <Title>{this.name}</Title>
    <SelectTable>
      <SelectTableItem click={reol.to('GameRoom')}>开始</SelectTableItem>
      <SelectTableItem click={this.loadData()}>继续</SelectTableItem>
      <SelectTableItem click={reol.to('SettingRoom')}>设置</SelectTableItem>
      <SelectTableItem click={reol.exit()>推出</SelectTableItem>
    </SelectTable>
    </Room>)
  }
  
  loadData () {
    // ...
  }
}
```
