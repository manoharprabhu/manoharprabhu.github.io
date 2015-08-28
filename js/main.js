(function() {
    $(document).ready(function(){
        $('#main-jumbotron').removeClass('invisible');
        $('#main-jumbotron').addClass('appear-twofive');   
        
        $('#current-employment-panel').removeClass('invisible');
        $('#current-employment-panel').addClass('appear-five');
        
        $('#tools-of-trade-panel').removeClass('invisible');
        $('#tools-of-trade-panel').addClass('appear-sevenfive');
        $('[data-toggle="tooltip"]').tooltip();
        
    });
    
    $(window).on('scroll',function(){
        var scrollOffset = document.body.scrollTop;
        var SCROLL_THRESHHOLD = 160;
        if(scrollOffset === 0){
            scrollOffset = 1;
        }
        var opacity = 1;
        var factor = 1;
        if(scrollOffset < SCROLL_THRESHHOLD) {
            factor = scrollOffset/SCROLL_THRESHHOLD;
        } else {
            factor = 0.5;
        }
        
        if(factor > 0.5){
            factor = 0.5;
        }
        
        $('#main-navigation-bar').css('opacity',(1-factor));
        
    });
    
}());