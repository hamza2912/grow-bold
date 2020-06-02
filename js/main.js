$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"]
  })

  var owl = $('.owl-carousel');
  owl.owlCarousel();


  function barSwitch(){
    $( ".bar-line" ).animate({
      width: "100%"
      }, 5000, function() {
        owl.trigger('next.owl.carousel');
        $(".bar-line").width('0');
    });
  }
  
  setInterval(function(){barSwitch()});

  $('.owl-prev').on('click', function (e) {
    $(".bar-line").stop(true, true);
    $(".bar-line").width('0');
  });

  $('.owl-next').on('click', function (e) {
    $(".bar-line").stop(true, true);
    $(".bar-line").width('0');
  });
  
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