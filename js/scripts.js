$(document).ready(function() {
  // Business logic begins here
  var ping = "Ping"
  var pong = "Pong"
  var pingpong = "Ping Pong"
  var oldArray = [];
  var range = _.range(1, pp + 1);
  var newArray = oldArray.push(range)
  var method = oldArray.forEach(function() {
    if ( % 3 === 0) {
      return ping;
    } else if ( % 5 === 0) {
      return pong;
    } else if ( % 15 === 0) {
      return pingpong;
    } else {
      return
    }
  });

  

});









// user interface code begins here
$("form#pong").submit(function(event) {
event.preventDefault();
var pp = parseInt($("input#ping").val());
});
});
