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
            center: [53.058741, 158.632688],
            zoom: 16,
            behaviors: ['multiTouch']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

       //  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
       //    geometry: {
       //         type: "Point",
       //         coordinates: [53.059464, 158.634579],
       //         iconCaption: 'Очень длиннный, но невероятно интересный текст'
       //     },
       //
       //
       //
       // }, {
       //     // Опции.
       //     // Иконка метки будет растягиваться под размер ее содержимого.
       //     preset: 'islands#blackStretchyIcon',
       //      iconColor: 'orange',
       //     // Метку можно перемещать.
       //     draggable: false
       // });



    myMap.geoObjects
        .add(new ymaps.Placemark([53.059464, 158.634577], {
            iconCaption: '41 Регион'
        }, {
            preset: 'islands#blueHeartIcon',
            iconColor: 'orange'
        }))

});





// ymaps.ready(init);
// function init(){
// var myMap = new ymaps.Map("map", {
//     center: [53.059394, 158.634600],
//     zoom: 17
// });
// myMap.geoObjects
//     .add(myGeoObject)
//     .add(myPieChart)
//     .add(new ymaps.Placemark([53.059394, 158.634600], {
//         balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#0095b6'
//     }))
// }
