/*jQuery(document).ready(function(){});*/

/*$('#menu').click(function() {
     $('#menu-dropdown-content').toggle();
  });

$('#language').click(function() {
     $('#lang-dropdown-content').toggle();
  });*/

$(document).ready(function(){


$("#menu").on('click', function(event){
 event.stopPropagation();
 $("#menu-dropdown-content").toggle();

});


$(document).on("click", function(event){
event.stopPropagation();
$("#menu-dropdown-content").hide();      

});

});

$(document).ready(function(){


$("#language").on('click', function(event){
 event.stopPropagation();
 $("#lang-dropdown-content").toggle();

});


$(document).on("click", function(event){
event.stopPropagation();
$("#lang-dropdown-content").hide();      

});

});
