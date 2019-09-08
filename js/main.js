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
 


/*$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $("article")

for (var i = 0; i < tags.length; i++) {
var tag = tags[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
} else {
  $(tag).removeClass("visible")
}
}
})*/

/*$(document).ready(function() {
    
   
    $(window).scroll( function(){
    
      
        $('.fade').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},750);
                    
            }
            
        }); 
    
    });
    
});*/




/*$(document).ready(function(){
$(document).on("scroll", function(){
    var scrollTop=$(document).scrollTop()
    var scrollBottom=scrollTop+$(window).height()
    var pageBottom=$(document).height()
    var diff = pageBottom - scrollBottom
    var opacity = 1 - diff/300
    $("div.fadein").css("opacity", opacity)
})
    })*/


    


