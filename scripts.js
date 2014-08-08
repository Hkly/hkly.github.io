  var swapImages = function(project) {
    var $active = $('#'+project+' .active');
    var $next = ($('#'+project+' .active').next().length > 0) ? $('#'+project+' .active').next() : $('#'+project+' img:first');
    $active.removeClass('active');
    $next.addClass('active');  
  }

$(document).ready(function() {
  var projects = ['habitrack', 'asteroids'];
  var count = 0;
  setInterval(function() {
    swapImages(projects[count]);
    count+= 1;
    if (count >= projects.length) {
      count = 0
    }
  }, 2000);
});