// fading in portfolio section on scroll


var $fadein = $(".fadein");

$fadein.waypoint(function(direction){
    if (direction == 'down'){
    $fadein.addClass('fadein-waypoint');
        } else {
      $fadein.removeClass('fadein-waypoint');      
        }
}, {offset: '50%'});

// jumping skill icons

var $move = $(".movement");

$move.waypoint(function(direction){
    if (direction == 'down'){
    $move.addClass('movement-waypoint');
        } else {
      $move.removeClass('movement-waypoint');      
        }
}, {offset: '50%'});

//sliding in the tech skills diagram

$(document).ready(function(){

var $slideInLeft = $(".slidein-left");

$slideInLeft.waypoint(function(direction){
    if (direction == 'down'){
    $slideInLeft.addClass('diagram-animate-left');
        } else {
      $slideInLeft.removeClass('diagram-animate-left');      
        }
}, {offset: '50%'});



// sliding in the languages diagram

var $slideInRight = $(".slidein-right");

$slideInRight.waypoint(function(direction){
    if (direction == 'down'){
    $slideInRight.addClass('diagram-animate-right');
        } else {
      $slideInRight.removeClass('diagram-animate-right');      
        }
}, {offset: '50%'});

});



