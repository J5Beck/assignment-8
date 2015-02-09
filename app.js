var counter = function() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if(minutes.toString().length > 2) {
                  minutes = "0" + minutes;
}
  if(seconds.toString().length < 2) {
                  seconds = "0" + seconds;
}
  var timeString = hour + ":" + minutes + ":" + seconds;
  
  $("p").text(timeString).css({
            "text-align" : "center",
             "font-size" : "90px",
            "font-style" : "italic",
           "padding-top" : "150px",
                "height" : "300px",
                 "width" : "75%",
                 "color" : "white",
      "background-color" : "black"
  })
}
var intID = setInterval(counter, 1000);
$(function(){})