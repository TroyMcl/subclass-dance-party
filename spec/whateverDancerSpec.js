describe('whateverDancer', function() {

  var whateverDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    whateverDancer = new makeWhateverDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(whateverDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a dance function that makes its node scale', function() {
    sinon.spy(whateverDancer.$node, 'css');
    whateverDancer.dance();
    expect(whateverDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(whateverDancer, 'step');
      expect(whateverDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(whateverDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(whateverDancer.step.callCount).to.be.equal(2);
    });
  });
});