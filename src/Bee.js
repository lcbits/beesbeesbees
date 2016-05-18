var Bee = function() {
  Grub.call(this, 5, 'yellow')
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
var bee = new Bee();
// console.log(bee.food);
console.log(bee.eat);