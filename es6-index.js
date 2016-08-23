class Demo {
  constructor(wowString) {
    this.wow = wowString
  }

  printWow() {
    console.log(`I am printing ${this.wow}`)
  }
}

const d = new Demo("wow")

d.printWow()
// regular old functions below
