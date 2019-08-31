/*jQuery(document).ready(function(){});*/

/*$('#menu').click(function() {
     $('#menu-dropdown-content').toggle();
  });

$('#language').click(function() {
     $('#lang-dropdown-content').toggle();
  });*/

$(document).ready(function(){


$("#menu").on('click mouseover', function(event){
 event.stopPropagation();
 $("#menu-dropdown-content").toggle();

});


$(document).on('click mouseout', function(event){
event.stopPropagation();
$("#menu-dropdown-content").hide();      

});

});

$(document).ready(function(){


$("#language").on('click mouseover', function(event){
 event.stopPropagation();
 $("#lang-dropdown-content").toggle();

});


$(document).on('click mouseout', function(event){
event.stopPropagation();
$("#lang-dropdown-content").hide();      

});

});


$(document).ready(function(){
        
        
        $('#contactform').validate({
            submitHandler: function(form) {
                
                var form=$('#contactform').serialize();
                var url=$('#contactform').attr('action');
                
                $('#overlay').fadeIn(2000);
                
                $.ajax({
                    type: 'post',
                    url: url,
                    data: form,
                    
                    success: function(responce){
                       $('#contactform').trigger("reset"); 
                        $('#overlay').fadeOut(2000);
                    }
                })
                
            }
        });
    });
 
