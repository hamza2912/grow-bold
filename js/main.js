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
        $('.sc-nav').removeClass('shadow');
        $('.sc-nav').addClass('lg:bg-transparent');
        $('.sc-nav').addClass('lg:text-white');
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

  let hideMapTooltipVar;

  const hideMapTooltip = (() => {
    console.log('baba');
    hideMapTooltipVar = setTimeout(function(){
      $('.map-tooltip').fadeOut();
    }, 1000);
  });

  const stopHideMapTooltip = (() => {
    console.log('asd');
    clearTimeout(hideMapTooltipVar);
  });


  $('.map-path').on('mouseenter', function(e){
    const countryName = $(this).data('map');
    const offset = $(this).offset();
    console.log($(this));

    const width = $(this)[0].getBBox().width;
    const height = $(this)[0].getBBox().height;
    const tooltipHeight = $('.map-tooltip').height();
    const tooltipWidth = $('.map-tooltip').width();

    console.log(tooltipWidth);
    console.log(height);

    const offsetLeft = offset.left + width/2.4 - 5;
    const offsetTop = offset.top + height/2.2 - tooltipHeight;

    stopHideMapTooltip();
    $('.map-tooltip-name').text(countryName);
    $('.map-tooltip').fadeIn();
    $('.map-tooltip').css({'top': offsetTop, 'left' : offsetLeft});
  });

  $('.map-path').on('mouseleave', function(e){
    hideMapTooltip();
  });

  $('.map-tooltip').on('mouseenter', function(e){
    stopHideMapTooltip();
    $('.map-tooltip').stop( true, true ).fadeIn();
  });

});