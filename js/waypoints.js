var $fadein = $(".fadein");

$fadein.waypoint(function(direction){
    if (direction == 'down'){
    $fadein.addClass('fadein-waypoint');
        } else {
      $fadein.removeClass('fadein-waypoint');      
        }
}, {offset: '50%'});

