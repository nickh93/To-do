// Business Logic

//user interfaco Logic
$(document).ready(function(){


  $("form#new").submit(function(event){
    event.preventDefault();

    var toDos = $("input#form-bruh").val();
    $("ul#todos").append("<div class ='checkbox'><label><input type = 'checkbox' value=''>" + toDos + "</label></div>");
    $("input#form-bruh").val("");

    $("form#tasks").submit(function(event) {
      event.preventDefault();
      $(".checkbox input:checked").parent().remove(); //this will remove the checked object



  });


  });
});
