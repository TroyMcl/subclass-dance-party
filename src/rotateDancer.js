var makeRotateDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="https://media2.giphy.com/media/DQaeKJG9loQhL5nBLE/giphy.gif?cid=790b76115d17b4116832704b6f228311&rid=giphy.gif">');
  this.setPosition(top, left);
  this.slide();
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;
makeRotateDancer.prototype.slide = function () {
  this.$node.css({
    'animation-name': 'rotate',
    'animation-duration': '7s',
    'animation-iteration-count': 'infinite',
    'animation-direction': 'alternate',
    'position': 'absolute',
    'border': 'none',
    'border-radius': 'none',
    'position': 'none',
    //'transform': 'scale(.3)',
    'width': '150px',
    'height': 'auto'
  });
};

