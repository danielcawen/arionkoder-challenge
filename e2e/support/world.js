import { setWorldConstructor } from '@cucumber/cucumber'

class CustomWorld {
  constructor({ attach, parameters }) {
    this.attach = attach
    this.parameters = parameters

    this.browser = null
    this.context = null
    this.page = null
  }
}

setWorldConstructor(CustomWorld)
