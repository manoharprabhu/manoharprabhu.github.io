(function () {
    $(document).ready(function () {
        var opts = {
            lines: 5 // The number of lines to draw
            , length: 0 // The length of each line
            , width: 37 // The line thickness
            , radius: 23 // The radius of the inner circle
            , scale: 1.5 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.1 // Opacity of the lines
            , rotate: 55 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1.2 // Rounds per second
            , trail: 33 // Afterglow percentage
            , fps: 30 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '51%' // Top position relative to parent
            , left: '50%' // Left position relative to parent
            , shadow: true // Whether to render a shadow
            , hwaccel: true // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
        }
        var target = document.getElementById('loading-spinner');
        var spinner = new Spinner(opts).spin(target);
        setTimeout(function(){makeStuffAppear(spinner)}, 1000);
    });

    function makeStuffAppear(spinner) {
        $('#main-jumbotron').removeClass('invisible');
        $('#main-jumbotron').addClass('appear-twofive');

        $('#current-employment-panel').removeClass('invisible');
        $('#current-employment-panel').addClass('appear-five');

        $('#tools-of-trade-panel').removeClass('invisible');
        $('#tools-of-trade-panel').addClass('appear-sevenfive');
        $('[data-toggle="tooltip"]').tooltip();
        spinner.stop();
    }

    $(window).on('scroll', function () {
        var scrollOffset = document.body.scrollTop;
        var SCROLL_THRESHHOLD = 160;
        if (scrollOffset === 0) {
            scrollOffset = 1;
        }
        var opacity = 1;
        var factor = 1;
        if (scrollOffset < SCROLL_THRESHHOLD) {
            factor = scrollOffset / SCROLL_THRESHHOLD;
        } else {
            factor = 0.5;
        }

        if (factor > 0.5) {
            factor = 0.5;
        }

        $('#main-navigation-bar').css('opacity', (1 - factor));

    });

}());