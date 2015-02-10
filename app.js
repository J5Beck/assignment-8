var counter = function() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if(hour.toString().length < 2) {
                  hour = "0" + hour;
}
  if(minutes.toString().length < 2) {
                  minutes = "0" + minutes;
}
  if(seconds.toString().length < 2) {
                  seconds = "0" + seconds;
}
  var timeString = hour + ":" + minutes + ":" + seconds;
  
  $("p").text(timeString).css({
            "text-align" : "center",
             "font-size" : "80px",
            "font-style" : "italic",
           "padding-top" : "150px",
                "height" : "300px",
                 "width" : "600px",
                 "color" : "white",
      "background-color" : "black"
  })
  var colorString = "#" + hour + minutes + seconds;

  $("h1").text(colorString).css({
                "dislay" : "block",
            "text-align" : "center",
             "font-size" : "80px",
            "font-style" : "italic",
           "padding-top" : "150px",
                "height" : "300px",
                 "width" : "600px",
                 "color" : "white",
      "background-color" : colorString
  })    
}
var intID = setInterval(counter, 1000);
$(function(){})