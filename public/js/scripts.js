
$(document).ready(function (){
    
$(window).load(function() {
    $(".se-pre-con").fadeOut(1000);   
      });

 var animate = document.getElementById("animation")
    $(".container").click(function(){
        animate.classList.add('st0');

    let nextContainer = $(this).next();
        $('html, body').animate({
            scrollTop: $(nextContainer).offset().top
                }, 1000,
             )})
  
        $('.rorschach').click(function(){
             $('#popcorn').addClass('.loading');
                });
                 
            $("input").click(function(e){
                e.stopPropagation();
                    })
               
                $(".city-input").keydown(function(event){
                    if(event.keyCode == 13) {
                        event.preventDefault();
                            return false;
                            }
                        }) 
                        }); 

                    