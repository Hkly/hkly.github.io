  var swapImages = function(project) {
    var $active = $('#'+project+' .active');
    var $next = ($('#'+project+' .active').next().length > 0) ? $('#'+project+' .active').next() : $('#'+project+' img:first');
    $active.removeClass('active');
    $next.addClass('active');  
  }

$(document).ready(function() {

  setInterval("swapImages('habitrack')", 3000);
  setInterval("swapImages('asteroids')", 3000);


});