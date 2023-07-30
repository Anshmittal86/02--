let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

function displayTime() {
  let date = new Date();
  var audio = new Audio("./tick.mp3");
   
  audio.play();
  //Getting hour, minutes, seconds
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hour.style.cssText = `rotate: ${hRotation}deg;`
  minute.style.cssText = `rotate: ${mRotation}deg;`
  second.style.cssText = `rotate: ${sRotation}deg;`
 
}



setInterval(displayTime, 1000)