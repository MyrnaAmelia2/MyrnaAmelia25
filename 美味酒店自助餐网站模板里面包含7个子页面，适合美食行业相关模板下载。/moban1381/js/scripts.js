(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#E88010", cursorwidth: '6', cursorborderradius: '10px', background: '#666', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"#E88010", cursorwidth: '6', cursorborderradius: '10px',autohidemode: 'false', background: '#4C4C48', spacebarenabled:false, cursorborder: '0'});

	
    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

})(jQuery);

                     
     
  