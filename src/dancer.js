// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
//this.step();

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(node) {
  $('.dancer').css({
    'animation-name': 'none',
    'animation-duration': 'none',
    'animation-iteration-count': 'none',
    'animation-direction': 'none',
    'position': 'none'
  });
  $('.dancer').animate({
    left: 280
  }, 'slow');
  //this.$node.css({'border-color':'blue'})
};

makeDancer.prototype.findNeighbor = function(node) {
  var nodeArray = window.dancers
  var closestNode = nodeArray[0];
  var nodeDistanceMeasurement = 10000
  for (var i = 0; i < nodeArray.length; i++) {
    var distance = makeDancer.prototype.getDistance(node.target.x, node.target.y, nodeArray[i][0].x,nodeArray[i][0].y );
    if(distance < nodeDistanceMeasurement && distance > 0) {
      nodeDistanceMeasurement = distance;
      closestNode = nodeArray[i]
    }
    // console.log('x cordinate', nodeArray[i][0].x)
    // console.log('y cordinate', nodeArray[i][0].y)
  }
  closestNode.css({
    'animation-name': 'bounce-1',
    'animation-timing-function': 'linear'
  });

  node.currentTarget.css({
    'animation-name': 'bounce-1',
    'animation-timing-function': 'linear'
  });

}

makeDancer.prototype.getDistance = function (x1, y1, x2, y2) {
  var xs = x2 - x1;
  var ys = y2 - y1;

  xs *= xs;
  ys *= ys;

  return Math.sqrt(xs+ys)
}

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//this.setPosition(top, left);

