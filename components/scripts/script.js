$(function() {
    var topoffset = 43; 
    
    var isTouch = 'ontouchstart' in document.documentElement;
    
    //window height
    var wheight = $(window).height(); // get window height
    
    $('.fullheight').css('height', wheight);
    
    //on resizing window
    $(window).resize(function () {
        var wheight = $(window).height();
        $('.fullheight').css('height', wheight);
    });//on resize
    
    
    //Animated scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      }// target.length
    } //location hostname
  }); //onclick
  
  /*
   * 
   * check whether we scroll past some area
   */
  $(window).scroll(function () {
     var windowposn = $(window).scrollTop() +  topoffset;
     $('nav li a').removeClass('active');
     
     /*Highlight Navigation
      * 
      * if the posn of the current window is past a certain element
      * then remove class active from elems those were highlighted,
      * Find elem with an href of #hotelinfo and then add active class
      */
     
     if(windowposn > $('#hotelinfo').offset().top) {
         $('nav li a').removeClass('active');
         $('a[href$="#hotelinfo"]').addClass('active');
     }//windowposn
     if(windowposn > $('#rooms').offset().top) {
         $('nav li a').removeClass('active');
         $('a[href$="#rooms"]').addClass('active');
     }//windowposn
     if(windowposn > $('#dining').offset().top) {
         $('nav li a').removeClass('active');
         $('a[href$="#dining"]').addClass('active');
     }//windowposn
     if(windowposn > $('#events').offset().top) {
         $('nav li a').removeClass('active');
         $('a[href$="#events"]').addClass('active');
     }//windowposn
     if(windowposn > $('#attractions').offset().top) {
         $('nav li a').removeClass('active');
         $('a[href$="#attractions"]').addClass('active');
     }//windowposn
     
  }); //window scroll
    
    //set up scrollmagic
    /*
     * 
     */
    var controller = new ScrollMagic({
        globalSceneOptions: {
            //default params for * anims
            triggerHook: "onLeave"
        }
    });
    
    
    /*
     * Pin the Navbar
     */
    var pin = new ScrollScene({
        triggerElement: '#nav'
    }).setPin('#nav').addTo(controller);
    
    
   if(!isTouch) {
        //room animations
    var roomOrigin = {
        bottom: -700,
        oppacity: 0,
        scale: 0
    };
    
    var roomDest = {
        repeat: 1,
        yoyo: true,
        bottom: 0,
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    };
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#westminster .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#westminster',
        offset: -topoffset,
        duration: 500
    }).setPin('#westminster')
            .setTween(roomtween)
            .addTo(controller);
    
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#oxford .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#oxford',
        offset: -topoffset,
        duration: 500
    }).setPin('#oxford')
            .setTween(roomtween)
            .addTo(controller);
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#victoria .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#victoria',
        offset: -topoffset,
        duration: 500
    }).setPin('#victoria')
            .setTween(roomtween)
            .addTo(controller);
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#manchester .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#manchester',
        offset: -topoffset,
        duration: 500
    }).setPin('#manchester')
            .setTween(roomtween)
            .addTo(controller);
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#cambridge .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#cambridge',
        offset: -topoffset,
        duration: 500
    }).setPin('#cambridge')
            .setTween(roomtween)
            .addTo(controller);
    
    var roomtween = TweenMax
            .staggerFromTo(
                "#piccadilly .content",
                1, roomOrigin, roomDest
            );
    
    var pin = new ScrollScene({
        triggerElement: '#piccadilly',
        offset: -topoffset,
        duration: 500
    }).setPin('#piccadilly')
            .setTween(roomtween)
            .addTo(controller);
   }// not a touch device
    
    /*
     * The Attractions section
     */
    var attratcionsTween = TweenMax
            .staggerFromTo(
                '#attractions article', 1, 
                   { opacity: 0, scale: 0 }
                ,  { delay: 1, opacity: 1, scale: 1,
                 ease: Back.easeOut});

    var scene = new ScrollScene({
       triggerElement: '#attractions',
       offset: -topoffset
    }).setTween(attratcionsTween)
      .addTo(controller);
    
});//on load