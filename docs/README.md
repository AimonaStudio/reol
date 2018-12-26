# Reol-Engine 设计思路

我们可以用以下方式来搭建我们的游戏

> 以下代码仅供提供思路和参考

```js
// room1.js
class MainRoom {
   constructor (conf) {
     const { dialog } = conf
     this.name = 'MainRoom'   
     this.dialog = dialog  // dialog 为生成器
   }
   
   update () {
 
   }
 
   created () {
     return (
       <Screen>
         <DialogTable>
           <Dialog data={this.dialog.value} click={this.nextDialog()}></Dialog>
         </DialogTable>
       </Screen>)
   }
   
   nextDialog () {
     this.dialog.next()
   }
 }
```
