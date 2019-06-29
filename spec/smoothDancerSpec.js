describe('smoothDancer', function() {

  var smoothDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    smoothDancer = new makeSmoothDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(smoothDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a slide function that makes its node slide', function() {
    sinon.spy(smoothDancer.$node, 'css');
    smoothDancer.slide();
    expect(smoothDancer.$node.css.called).to.be.true;
  });

  it('should have lineUp method', function() {
    sinon.spy(smoothDancer.$node, 'animate');
    smoothDancer.lineUp();
    expect(smoothDancer.$node.animate).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(smoothDancer, 'step');
      expect(smoothDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(smoothDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(smoothDancer.step.callCount).to.be.equal(2);
    });
  });
});