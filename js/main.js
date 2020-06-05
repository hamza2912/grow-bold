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


  $('#map-ethiopia, .identifier-ethiopia').on('mouseenter', function(e){
    $('.map-identifier').addClass('map-tool-ethiopia');
    $('.map-identifier').hide().fadeIn();
    $('.map-identifier-name').text('Ethiopia');
    $('.map-identifier-text').text('Interested to know more about your work in Ethiopia');
    $('.identifier-nigeria, .identifier-kenya, .identifier-uganda, .identifier-kampala').hide();
  })

  $('#map-ethiopia, .identifier-ethiopia').on('mouseleave', function(e){
    $('.map-identifier').fadeOut();
    $('.map-identifier').removeClass('map-tool-ethiopia');
    $('.identifier-nigeria, .identifier-kenya, .identifier-uganda, .identifier-kampala').show();
  })

  $('#map-nigeria, .identifier-nigeria').on('mouseenter', function(e){
    e.stopImmediatePropagation();
    $('.map-identifier').hide().fadeIn();
    $('.map-identifier').addClass('map-tool-nigeria');
    $('.map-identifier-name').text('Nigeria');
    $('.map-identifier-text').text('Interested to know more about your work in Nigeria');
    $('.identifier-ethiopia, .identifier-kenya, .identifier-uganda, .identifier-kampala').hide();
  })

  $('#map-nigeria, .identifier-nigeria').on('mouseleave', function(e){
    $('.map-identifier').fadeOut();
    $('.map-identifier').removeClass('map-tool-nigeria');
    $('.identifier-ethiopia, .identifier-kenya, .identifier-uganda, .identifier-kampala').show();
  })

  $('#map-kenya, .identifier-kenya').on('mouseenter', function(e){
    e.stopImmediatePropagation();
    $('.map-identifier').hide().fadeIn();
    $('.map-identifier').addClass('map-tool-kenya');
    $('.map-identifier-name').text('Kenya');
    $('.map-identifier-text').text('Interested to know more about your work in Kenya');
    $('.identifier-ethiopia, .identifier-nigeria, .identifier-uganda, .identifier-kampala').hide();
  })

  $('#map-kenya, .identifier-kenya').on('mouseleave', function(e){
    $('.map-identifier').fadeOut();
    $('.map-identifier').removeClass('map-tool-kenya');
    $('.identifier-ethiopia, .identifier-nigeria, .identifier-uganda, .identifier-kampala').show();
  })

});