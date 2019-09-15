// menu toggle

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


//form validation

$(document).ready(function(){
        
        
        $('#contactform').validate({
            submitHandler: function(form) {
                
                var form=$('#contactform').serialize();
                var url=$('#contactform').attr('action');
                
                $('#overlay').fadeIn(1800);
                
                $.ajax({
                    type: 'post',
                    url: url,
                    data: form,
                    
                    success: function(responce){
                       $('#contactform').trigger("reset"); 
                        $('#overlay').fadeOut(1800);
                    }
                })
                
            }
        });
    });
 


/*back-home button on dorothy design and cv pages*/

$(document).ready(function() {
    
    var offset=200; //where the button appears
    var duration=500;
   
    $(window).scroll(function(){
    
       if($(this).scrollTop()>offset) {
           $('.home-button').fadeIn(duration);
       } else {
           $('.home-button').fadeOut(duration);
       }
    });
    
});




    


