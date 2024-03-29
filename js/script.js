var resized = 0;




$(document).ready(function(){
     $(".about-card").attr( "style", "" );
    if($(window).width() > 991){
      elementsHeightChange(".about-card");
    }

    //elementsHeightChange(".chanel-item");

    $('.ticker-title').marquee({
      //duration in milliseconds of the marquee
      duration: 10000,
      //gap in pixels between the tickers
      gap: 30,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true
    });

    $('.ticker-fixed-title').marquee({
      //duration in milliseconds of the marquee
      duration: 6500,
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

      tickerFixedWidth();

      $(".ticker-fixed").on("click", function (event) {
        event.preventDefault();
          topTicker = $('#ticker-on-tv').offset().top;
        $('body,html').animate({scrollTop: topTicker}, 700);	});


         if($(window).width() < 768){
            loadSwiper();
         }


});

$(window).scroll(function () {
    topTickerPos = $('.ticker-title').offset().top;
    if ($(this).scrollTop()+$(window).height() >= topTickerPos) {
        $('.ticker-fixed').css('display', 'none');
    } else {
        $('.ticker-fixed').css('display', 'flex');
    }
});

//    $(window).scroll(function () {
//     if ($(this).scrollTop() > 90) {
//         $('#back-to-top').fadeIn();
//     } else {
//         $('#back-to-top').fadeOut();
//     }
// });
//
// $('#back-to-top').click(function () {
//     $('#back-to-top').hide();
//     $('body,html').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });


function tickerFixedWidth(){

  let widthCont = $('.container').width();

  $('.ticker-fixed').width(widthCont+30);

}


$(window).resize(function(){
    $(".about-card").removeAttr("style")
    if($(window).width() > 991){
      elementsHeightChange(".about-card");
    }
      tickerFixedWidth();

      if($(window).width()<=768 && resized == 0){
      loadSwiper();

      resized++;
    }

});


function elementsHeightChange(elementSel){
      let elementHeight = 0;
     $(elementSel).each(function(){
      var curElementHeight = $(this).height();
      if(elementHeight < curElementHeight){
        elementHeight = curElementHeight;

      }
  });
    $(elementSel).height(elementHeight);
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



function loadSwiper(){
		resized++;
		var voiceWrapName = '.projects-items';


bildDomForSwiper(voiceWrapName);


		  var swiper1 = new Swiper('.swiper1', {

  	 pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
    delay: 3000,

    }

  });

}



function bildDomForSwiper(voiceWrapName) {
			$(voiceWrapName).removeClass('row justify-content-center').addClass('col-12');
      $('.projects-items .card').addClass('swiper-slide').removeClass('col-12 col-md-6 col-lg-4');
      $(voiceWrapName).addClass('swiper-wrapper');
      $(voiceWrapName).wrap("<div class = 'swiper-container swiper1'></div>");
			$(voiceWrapName).parent().append("<div class='swiper-pagination'></div> ");

}
