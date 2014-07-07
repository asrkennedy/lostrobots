$(function(){

  var teamPhoto = $('.team_photo_hov').siblings('img');

  var windowHeight = $(window).height();

  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

  var element = $('.team_photo')

  function getPhotoWH() {
        $('.team_photo_hov').css({
          width: teamPhoto.width().toFixed(2),
          height: teamPhoto.height().toFixed(2)
        });
  }

  function slideText(photo) {
    console.log(photo)
    var moreText = $(photo).siblings('.team_text_more')
    if (moreText.css('display') != 'none') {
      moreText.slideUp('slow');
    } else {
      moreText.slideDown('slow');
    }
  }

  function animateScroll(clickedLink){
     var target = "#" + $(clickedLink).data('target');
      $('html, body').animate({
          scrollTop: ($(target).offset().top) - 65
      }, 1000);
  }

// Makes sections fill the browser's height
  $('.header').css('min-height', windowHeight/2);
  $('#section-1').css('min-height', windowHeight/2);
  $('#section-4').css('min-height', windowHeight-66);

  // Bounces robot
  $('main').click(function(){
    $(this).stop().effect('bounce', {times:3}, "slow");
  });

  // Gets height & width for hover div in case of window resize
  $('.team_photo').hover(function(){
   getPhotoWH();
  })

// Slides bio text open and closed
$('.team_photo').on('click', function(){
    slideText(this);
});

  // Runs scroll to section and shows back_to_top/active state
  $( 'nav ul li a' ).on('click', function(event) {
      event.preventDefault();
      $('.back_to_top').fadeIn();
      $('.active').removeClass();
      $(this).addClass('active');
      animateScroll(this);
  });

// Runs scroll animation for internal link to about section
  $('.about_section').on('click',function(event){
    event.preventDefault();
    animateScroll(this);
  })

  // Controls for "Back to top" link
  $( '.back_to_top' ).on('click', function(event) {
      event.preventDefault();
      $(this).fadeOut('slow')
      $('.active').removeClass();
      animateScroll(this);
  });

// Hides Back to Top link when scrolled to top
  $(window).scroll(function(){
    if ($(window).scrollTop() == 0) {
      $('.back_to_top').fadeOut();
    }
  })

  // Hides and shows robot for collapsible nav on resize for mobile
  $(window).resize(function(){
     if (isMobile.matches) {
       $('.title').show();
    } else {
      $('.title').hide();
    }
  })

   // Toggles nav on mobile for different clicks
   if (isMobile.matches) {
     $('.title').on('click',function(){
          $('nav ul').slideToggle();
      });
      $('nav ul li a').on('click', function(){
        $('nav ul').slideToggle();
      });
      $('.back_to_top').on('click', function(){
        if ($('nav ul').css('display') != 'none') {
           $('nav ul').slideToggle();
        }
      });
      $('.team_photo_hov').remove();
   }

  // Gets height & width for hover div on load
  getPhotoWH();

});

