function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startingPosition = window.pageYOffset;
  var distance = targetPosition - startingPosition;
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startingPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animationScroll);
}

var backToTopBtn = document.querySelector(".back-to-top-btn");
var box1 = document.querySelector(".btn");
box1.addEventListener("click", function() {
  smoothScroll("#box2", 1000);
});

backToTopBtn.addEventListener("click", function() {
  smoothScroll("#box1", 1600);
});
