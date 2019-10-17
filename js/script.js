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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.059248, 158.634287],
            zoom: 16,
            behaviors: ['multiTouch']
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
            iconColor: 'orange'
        }))

});
