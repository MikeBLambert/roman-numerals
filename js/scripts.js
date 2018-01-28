//Business Logic

//User Interface
$(document).ready(function() {
  $("#numberInput").submit(function(event) {
  event.preventDefault();
    var number = $("#input").val();
    var romanNumeral = numberToRomanNumeral(number);
    $("#output").html(romanNumeral);
  });
});
