// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
       var item = $('form input');
       console.log(item.serializeArray());

       //Disable button after survey taken
       $("#bb").prop("disabled", "true");

      $.ajax({
        type: 'POST',
        url: '/index',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
        }
      });
      return false;
  });
});
