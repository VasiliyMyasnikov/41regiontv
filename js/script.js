$(document).ready(function(){
    elementsHeightChange();
});

$(window).resize(function(){
    elementsHeightChange();

});


function elementsHeightChange(){
      let elementHeight = 0;
     $(".about-card").each(function(){
      var curElementHeight = $(this).height();
      if(elementHeight < curElementHeight){
        elementHeight = curElementHeight;
      }
      
    
  });
    $(".about-card").height(elementHeight);
}