import { EventEmitter } from 'events'

class App extends EventEmitter {
  constructor () {
    super()
  }
}

window.app = new App()

console.log(`Single-page app has started`)
