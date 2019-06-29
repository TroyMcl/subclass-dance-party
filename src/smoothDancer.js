var makeSmoothDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="https://media0.giphy.com/media/2Wf4qYgMmou4zjg9qX/giphy.gif?cid=790b76115d177fa04670357a6b0124f5&rid=giphy.gif">');
  this.setPosition(top, left);
  this.slide();
};

makeSmoothDancer.prototype = Object.create(makeDancer.prototype);
makeSmoothDancer.prototype.constructor = makeSmoothDancer;
makeSmoothDancer.prototype.slide = function () {
  this.$node.css({
    'animation-name': 'slide',
    'animation-duration': '7s',
    'animation-iteration-count': 'infinite',
    'animation-direction': 'alternate',
    'position': 'absolute',
    'border': 'none',
    'border-radius': 'none',
    'position': 'none',
    //'transform': 'scale(.3)',
    'width': '200px',
    'height': 'auto'
  });
};

makeSmoothDancer.prototype.lineUp = function() {
  this.$node.css({'border-color' : 'blue'});
};
