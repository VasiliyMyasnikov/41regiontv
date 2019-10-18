$(document).ready(function(){
     $(".about-card").attr( "style", "" );
    if($(window).width() > 991){
      elementsHeightChange();
    }
    $('.ticker-title').marquee({
      //duration in milliseconds of the marquee
      duration: 5700,
      //gap in pixels between the tickers
      gap: 30,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true
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
            //behaviors: ['multiTouch']
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

        myMap.controls.remove('geolocationControl')
          .remove('trafficControl')
          .remove('typeSelector')
          .remove('fullscreenControl')
          .remove('searchControl')
          .remove('rulerControl');

    myMap.geoObjects
        .add(new ymaps.Placemark([53.059464, 158.634577], {
            iconCaption: '41 Регион'
        }, {
            preset: 'islands#blueHeartIcon',
            iconColor: '#fc4c02'
        }))

});
