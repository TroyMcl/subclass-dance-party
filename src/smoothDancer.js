var makeSmoothDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.slide();
};

makeSmoothDancer.prototype = Object.create(makeDancer.prototype);
makeSmoothDancer.prototype.constructor = makeSmoothDancer;
makeSmoothDancer.prototype.slide = function () {
  // this.$node.animate({backgroundPositionX:'+=300px' });
};
