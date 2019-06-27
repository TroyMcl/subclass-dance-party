var makeWhateverDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.dance();
};

makeWhateverDancer.prototype = Object.create(makeDancer.prototype);
makeWhateverDancer.prototype.constructor = makeWhateverDancer;

makeWhateverDancer.prototype.dance = function() {
  this.$node.css({
    'animation-name': 'stretch',
    'animation-duration': '1.5s',
    'animation-timing-function': 'ease-out',
    'animation-delay': '0s',
    'animation-direction': 'alternate',
    'animation-iteration-count': 'infinite',
    'animation-fill-mode': 'none',
    'animation-play-state': 'running'
  });
};
