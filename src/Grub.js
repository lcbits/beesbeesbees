var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food){
  return "Mmmmmmmmm " + this.food;
}

var Bee = new Grub(5);
console.log(Bee);