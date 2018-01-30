//Business Logic
function ones(a) {
  var onesNumerals = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  var allNumbers = ["0","1","2","3","4","5","6","7","8","9"];
  var padNumber = a.padStart(4,"0");
  var arrayNumber = padNumber.split("");
  for (var i=0; i<=allNumbers.length;i+=1) {
    if (arrayNumber[3]===allNumbers[i]) {
      return onesNumerals[i];
    };
  };
};
function tens(a) {
  var tensNumerals = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var allNumbers = ["0","1","2","3","4","5","6","7","8","9"];
  var padNumber = a.padStart(4,"0");
  var arrayNumber = padNumber.split("");
    for (var i=0; i<=allNumbers.length;i+=1) {
      if (arrayNumber[2]===allNumbers[i]) {
        return tensNumerals[i];
      };
    };
};
function hundreds(a) {
  var hundredsNumerals = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var allNumbers = ["0","1","2","3","4","5","6","7","8","9"];
  var padNumber = a.padStart(4,"0");
  var arrayNumber = padNumber.split("");
    for (var i=0; i<=allNumbers.length;i+=1) {
      if (arrayNumber[1]===allNumbers[i]) {
        return hundredsNumerals[i];
      };
    };
};
function thousands(a) {
  var thousandsNumerals = ["","M","MM","MMM"];
  var allNumbers = ["0","1","2","3"];
  var padNumber = a.padStart(4,"0");
  var arrayNumber = padNumber.split("");
    for (var i=0; i<=allNumbers.length;i+=1) {
      if (arrayNumber[0]===allNumbers[i]) {
        return thousandsNumerals[i];
      };
    };
};

//User Interface
$(document).ready(function() {
  $("#numberInput").submit(function(event) {
  event.preventDefault();
    var number = $("#input").val();
    var romanNumeral = thousands(number)+hundreds(number)+tens(number)+ones(number);
    $("#output").html(romanNumeral);
  });
});
