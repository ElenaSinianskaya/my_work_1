$(document).ready(function(){

  // menu
  $('.open').on('click', function () {
      $('nav').addClass('active');
  });

  $('.close').on('click', function () {
      $('nav').removeClass('active');
  })

  // sliders
  $('.slider-clients').slick({
    // arrows:false
  });
  $('.slider-quote').slick({
    // arrows:false
  });


  // scroll
  $('.go-to').click( function(){ // ловим клик по ссылке с классом go_to
  	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
          if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
  	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1200); // анимируем скроолинг к элементу scroll_el
          }
  	    return false; // выключаем стандартное действие
      });


  // accordions:
  $('#portfolio-accordion').responsiveTabs({
      startCollapsed: 'accordion'
  });
  $('#team-accordion').responsiveTabs({
      startCollapsed: 'accordion'
  });




  //
  // $('.slider-about-us').slick({
  //
  // });
  //
  // $('.slider-quotes').slick({
  //     vertical:true,
  //     dots:true,
  //     arrows:false
  //   });
  //
  // $('.slider-quote-inside').slick({
  //     dots:false,
  //     arrows:true
  //   });

  $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

    });
  });

  //circles
  $(document).ready(function(){
  	function create_circles(duration) {
  		$('.circle').each(function(){
  			var myCircle = Circles.create({
  				  id:                  $(this).attr('id'),
  				  radius:              72,
  				  value:               $(this).data('value'),
  				  maxValue:            100,
  				  width:               3,
  				  text:                function(value){return value + '%';},
  				  colors:              ['#ffffff', 'var(--color-primary'],
  				  duration:            duration,
  				  wrpClass:            'circles-wrp',
  				  textClass:           'circles-text',
  				  valueStrokeClass:    'circles-valueStroke',
  				  maxValueStrokeClass: 'circles-maxValueStroke',
  				  styleWrapper:        true,
  				  styleText:           true
  				});
  		});
  	}

  	// initialize
  	create_circles(0);

  	// animation on scrol
  	var skills_loaded = false;
  	$(window).scroll(function(){
  		if ( skills_loaded ) return;

  		var cPos = $('.list-skills').offset().top,
  		topWindow = $(window).scrollTop();

  		if (cPos < topWindow + 400) {
  			create_circles(1400);
  			skills_loaded = true;
  		}
  	});
  });
});
