// todo: use alias
import { Room } from 'dist/components'

@Room
class MainRoom {
  name = 'Welcome'

  created (reol) {
    return (<Room title={this.name}>
        <SelectTable>
          <SelectTableItem click={reol.to('GameRoom')}>开始</SelectTableItem>
          <SelectTableItem click={this.loadData()}>继续</SelectTableItem>
          <SelectTableItem click={reol.to('SettingRoom')}>设置</SelectTableItem>
          <SelectTableItem click={reol.exit()}> 推出 </SelectTableItem>
        </SelectTable>
      </Room>
    )
  }

  loadData () {

  }
}
