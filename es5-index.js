var Demo = function(wowString) {
  this.wow = wowString
}

Demo.prototype.printWow = function() {
  console.log("I am printing " + this.wow)
}

var d = new Demo("wow")

d.printWow()
// regular old functions below
