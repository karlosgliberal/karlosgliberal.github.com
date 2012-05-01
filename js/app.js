$(document).ready(function(){

 $("#searchForm").submit(function(event) {
    event.preventDefault(); 
    var $form = $(this),
        user = $form.find( 'input[name="user"]' ).val(),
        pass = $form.find( 'input[name="pass"]' ).val(),
        url = $form.attr( 'action' );
        $.post( url, {user: user, pass: pass}, function(data) {
         var options = {
            username: user, // your fluidinfo username
            password: pass, // your fluidinfo password
            instance: "main" // either "main", "sandbox" or "http://somthing.else/"
          };
         var session = fluidinfo(options);
         createPost(session);
        }
    );
  });

  var createPost = function(se){ 
    var options = {
      about: "Teknotrakitana, jugando con VVVV y osc", 
      onSuccess: function(result) {
        console.log('Ok');
        console.log(result);
      },
      onError: function(err){
        console.log(err);
      }
    }
    se.createObject(options);
  }
});
