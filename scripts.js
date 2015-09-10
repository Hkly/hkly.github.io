var projects = ['habitrack', 'asteroids'];
var count = 0;

var swapProjectImage = function(project) {
  var $active = $('#' + project + ' .active');
  var $next = $active.next();

  if($next.length <= 0) {
    $next = $('#' + project + ' img:first');
  }

  $active.removeClass('active');
  $next.addClass('active');
};

var rotateImages = function() {
  swapProjectImage(projects[count]);
  count+= 1;
  if(count >= projects.length) {
    count = 0;
  }
};

$(document).ready(function() {
  setInterval(rotateImages, 2000);
});
