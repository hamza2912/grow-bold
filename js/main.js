$(document).ready(function () {
  $('.intro-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000
  })

  var introCarousel = $('.intro-carousel');
  introCarousel.owlCarousel();

  function barSwitch(){
    $( ".intro-bar-line" ).animate({
      width: "100%"
      }, 10000);
  }

  barSwitch();

  introCarousel.on('changed.owl.carousel', function(event) {
    $(".intro-bar-line").stop(true, true);
    $(".intro-bar-line").width('0');
    introCarousel.trigger('stop.owl.autoplay');
    introCarousel.trigger('play.owl.autoplay');
    barSwitch();
  });

  $('.covid-parallax').parallax({
    speed: 0.7,
    imageSrc: './images/intro/covid.jpg'
  });

  $.fn.pause = function(duration) {
    $(this).animate({ dummy: 1 }, duration);
    return this;
};

  $(window).scroll(function() {
    if($(window).scrollTop() > 500) {
      $('.sc-nav').removeClass('lg:bg-transparent');
      $('.sc-nav').removeClass('lg:text-white');
      $('.sc-nav').addClass('shadow');
      $('.nav-link:after').css('background', '#0000');

    } else {
      {
        $('.sc-nav').removeClass('shadow');
        $('.sc-nav').addClass('lg:bg-transparent');
        $('.sc-nav').addClass('lg:text-white');
    }
    }
  });

  $('.header-nav-toggle').on('click', function (e) {
    e.stopImmediatePropagation();
    $('.header-nav').slideToggle();
  });

  $('.header-nav a').on('click', function (e) {
    $('.header-nav a').removeClass('active');
    $(this).addClass('active');
  });

  $('body').on('click', function () {
    const windowWidth = $(window).width();
    if (windowWidth < 768) {
      $('.header-nav').slideUp();
    }
  });

  $('#map-ethiopia, #map-nigeria, #map-kenya, #map-uganda, .identifier-ethiopia, .identifier-nigeria, .identifier-kenya').on('mouseenter', function(e){
    
    const map_id = this.id;

    if(map_id == 'map-ethiopia'){
      $('.map-identifier').addClass('map-loc-ethiopia');
      $('.map-identifier').hide().fadeIn();
      $('.map-identifier-name').text('Ethiopia');
      $('.map-identifier-text').text('Interested to know more about your work in Ethiopia');
    }
    else if(map_id == 'map-nigeria'){
      $('.map-identifier').hide().fadeIn();
      $('.map-identifier').addClass('map-loc-nigeria');
      $('.map-identifier-name').text('Nigeria');
      $('.map-identifier-text').text('Interested to know more about your work in Nigeria');
    }
    else if(map_id == 'map-kenya'){
      $('.map-identifier').hide().fadeIn();
      $('.map-identifier').addClass('map-loc-kenya');
      $('.map-identifier-name').text('Kenya');
      $('.map-identifier-text').text('Interested to know more about your work in Kenya');
    }
    else if(map_id == 'map-uganda'){
      $('.map-identifier').hide().fadeIn();
      $('.map-identifier').addClass('map-loc-uganda');
      $('.map-identifier-name').text('Uganda');
      $('.map-identifier-text').text('Interested to know more about your work in Uganda');
    }
    $('.identifier-ethiopia, .identifier-nigeria, .identifier-uganda, .identifier-kampala, .identifier-kenya').hide();

  })

  $('#map-ethiopia, #map-nigeria, #map-kenya, #map-uganda').on('mouseleave', function(e){
    e.stopImmediatePropagation();
    if($('.map-identifier').is(':hover')){
      $('.map-identifier').show();
    }
    else{
      $('.map-identifier').fadeOut();
      $('.map-identifier').removeClass('map-loc-ethiopia');
      $('.map-identifier').removeClass('map-loc-nigeria');
      $('.map-identifier').removeClass('map-loc-kenya');
      $('.map-identifier').removeClass('map-loc-uganda');
      $('.identifier-ethiopia, .identifier-nigeria, .identifier-kenya, .identifier-uganda, .identifier-kampala').show();
    }
  })

});