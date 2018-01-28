//Business Logic
function numberToRomanNumeral(a) {
  var number = parseInt(a);
  var numberDigits = [1,5,10,50,100,500,1000];
  var romanDigits = ["I","V","X","L","C","D","M"];
  for (var i=0; i <= numberDigits.length; i += 1) {
    if (number === numberDigits[i]) {
      return romanDigits[i];
    };
  };
  console.log("else");
};

//User Interface
$(document).ready(function() {
  $("#numberInput").submit(function(event) {
  event.preventDefault();
    var number = $("#input").val();
    var romanNumeral = numberToRomanNumeral(number);
    $("#output").html(romanNumeral);
  });
});
