  // Business logic begins here
  var ping = "Ping"
  var pong = "Pong"
  var pingpong = "Ping Pong"
  var oldArray = [];
  var game = function(number) {

    for (var i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        oldArray.push(pingpong);
      } else if (i % 3 === 0) {
        oldArray.push(ping)
      } else if (i % 5 === 0) {
        oldArray.push(pong)
      } else {
        oldArray.push(i);
      }
    }
    return oldArray;
  }

  // user interface code begins here
  $(document).ready(function() {
    $("form#pong").submit(function(event) {
      event.preventDefault();
      
      var number = parseInt($("input#ping").val());
      var output =game(number)


      oldArray.forEach(function(number){

        $("ul.result").append("<li>" +number+"</li>")
      });

    });
  });
