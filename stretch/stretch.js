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
 




//  <section class='section--center mdl-grid mdl-shadow--1dp'>
//      <div class="article mdl-card mdl-cell mdl-cell--12-col">
//          <div class='mdl-card__supporting-text'>
//            <h2>Lambda School Students: "We're the best!"</h2>
//            <p class="date">Nov 5th, 2017</p>
//            <p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
//            moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
//            watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
//            Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
//            jar twi'lek jinn leia jango skywalker mon. </p>

//            <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
//            windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
//            mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
//            k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
//            solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
//            owen jinn tatooine sith organa.</p>

//            <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
//            naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
//            han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
//            moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>
//        </div>
//        <div class="mdl-card__actions">
//            <span class="expandButton mdl-button">Read our features</span>
//        </div>
//    </div>
//  </section>



{/* Original
 <div class="article">

       <h2>Lambda School Students: "We're the best!"</h2>
       <p class="date">Nov 5th, 2017</p>
       <p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
       moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
       watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
       Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
       jar twi'lek jinn leia jango skywalker mon. </p>

       <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
       windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
       mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
       k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
       solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
       owen jinn tatooine sith organa.</p>

       <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
       naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
       han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
       moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>

       <span class="expandButton mdl-button">Read our features</span>
</div> */}
