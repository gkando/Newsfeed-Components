$( document ).ready(function() {
    $(".article").each(function(){
        $( this ).wrapInner( "<div class='mdl-card__supporting-text'></div>");
        $( this ).addClass('mdl-card mdl-cell mdl-cell--12-col');
        $( this ).wrap("<section class='section--center mdl-grid mdl-shadow--1dp'></section>")
    });

    $('.articles').addClass('mdc-layout-grid')
    $('.expandButton').each(function(){
        var $dest = $(this).closest('.article');
        $(this).detach().appendTo($dest);
        $( this ).addClass('mdl-button');
        $( this ).wrap("<div class='mdl-card__actions'>");
        $(this).after('<span class="closeButton">x</span>');
    });
      
    

    function runEffect(e, selectedEffect) {
        // let selectedEffect = 'slide'
        // Run the effect
        $(e).closest('.article').hide( selectedEffect, 1000, callback );
      };
    
      // Callback function to bring a hidden box back
      function callback() {
        setTimeout(function() {
            $(e).closest('.article').removeAttr( "style" ).hide().fadeIn();
        }, 1000 );
      };
    
      // Set effect from select menu value
      $( ".closeButton" ).on( "click", function() {
        runEffect($(this), 'slide');
      });
});