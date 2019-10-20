$(document).ready(function(){
     $(".about-card").attr( "style", "" );
    if($(window).width() > 991){
      elementsHeightChange();
    }
    $('.ticker-title').marquee({
      //duration in milliseconds of the marquee
      duration: 5000,
      //gap in pixels between the tickers
      gap: 30,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true
    });

    $("#menu").on("click","a", function (event) {

      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);	});



      $(window).scroll(function () {
       if ($(this).scrollTop() > 90) {
           $('#back-to-top').fadeIn();
       } else {
           $('#back-to-top').fadeOut();
       }
   });

   $('#back-to-top').click(function () {
       $('#back-to-top').hide();
       $('body,html').animate({
           scrollTop: 0
       }, 500);
       return false;
   });


});



$(window).resize(function(){
    $(".about-card").removeAttr("style")
    if($(window).width() > 991){
      elementsHeightChange();
    }



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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.059248, 158.634287],
            zoom: 16,
            behaviors: ['drag', 'multitouch'],
            controls: ['zoomControl']
        }),


        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );



    myMap.geoObjects
        .add(new ymaps.Placemark([53.059464, 158.634577], {
            iconCaption: '41 Регион'
        }, {
            preset: 'islands#blueHeartIcon',
            iconColor: '#fc4c02'
        }))

});
