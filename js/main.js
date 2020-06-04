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

  $('#map-ethiopia').on('mouseenter', function(e){
    const id = $(this).attr('id');
    console.log(id.substring(4,));
    e.stopImmediatePropagation();
    $('.map-identifier').fadeIn();
    $('.map-identifier-name').text('Ethiopia');
  })

  $('#map-ethiopia').on('mouseleave', function(e){
    $('.map-identifier').fadeOut();
  })

  $('.map-identifier').on('mouseleave', function(e){
    e.stopImmediatePropagation();
    $('.map-identifier').fadeOut();
  });

  $('.map-identifier').on('mouseleave', function(e){
    $('.ethopia-identifier').show();
  })



  $(window).scroll(function() {
    if($(window).scrollTop() > 500) {
      $('.sc-nav').removeClass('lg:bg-transparent');
      $('.sc-nav').removeClass('lg:text-white');
      $('.sc-nav').addClass('shadow');
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
});