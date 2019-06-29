var makeWhateverDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="https://media1.giphy.com/media/FPavXB4SvTA3le9e7z/giphy.gif?cid=790b76115d17b912366f534136c605bb&rid=giphy.gif">');
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
    'animation-play-state': 'running',
    'border': 'none',
    'border-radius': 'none',
    'position': 'none',
    'width': '250px',
    'height': 'auto'
  });
};
