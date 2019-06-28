var makeSmoothDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
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
    'position': 'absolute'
  });
};

makeSmoothDancer.prototype.lineUp = function() {
  this.$node.css({'border-color' : 'blue'})
};
