$(document).ready(function(){
    elementsHeightChange();
});

$(window).resize(function(){
    elementsHeightChange();
    console.log(123);
});


function elementsHeightChange(){
      let elementHeight = 0;
     $(".about-card").each(function(){
      var curElementHeight = $(this).height();
      if(elementHeight < curElementHeight){
        elementHeight = curElementHeight;
        console.log(elementHeight);
      }
  });
    $(".about-card").height(elementHeight);
}
