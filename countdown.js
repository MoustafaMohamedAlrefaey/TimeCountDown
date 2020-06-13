

// $( document ).ready(function() {
//   // document.getElementById("datePicker").value = Date.now();

//   document.getElementById('datePicker').valueAsDate = new Date();
// });
var audio = new Audio('http://www.freshly-ground.com/misc/music/20060826%20-%20Armstrong.mp3');

Date.prototype.dateToInput = function(){
  return this.getFullYear() + '-' + ('0' + (this.getMonth() + 1)).substr(-2,2) + '-' + ('0' + this.getDate()).substr(-2,2);
}

Date.prototype.timeToInput = function(){
  return  ('0' + (this.getHours())).substr(-2,2) + ':' + ('0' + this.getMinutes()).substr(-2,2);
}

var date = new Date();
document.getElementById('datePicker').value = date.dateToInput();
document.getElementById('TimePicker').value = date.timeToInput();

testClicked();
function testClicked()
{
  debugger

  var x = document.getElementById("datePicker").value;

  var DatePic = document.getElementById("datePickerDiv");
var ratings = DatePic.getAttribute("data-date");
DatePic.setAttribute("data-date", x);


var y = document.getElementById("TimePicker").value;
var TimPic = document.getElementById("datePickerDiv");
var Rat = TimPic.getAttribute("data-time");
TimPic.setAttribute("data-time", y);

}

debugger
const $ = elem => document.querySelector(elem);



const countdown = function(_config) {
debugger;

  const tarDate = $(_config.target).getAttribute('data-date').split('-');
  const day = parseInt(tarDate[2]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[0]);
  let tarTime = $(_config.target).getAttribute('data-time');
  let tarhour, tarmin;

  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  let months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateNow = new Date();
  let dayNow = dateNow.getDate();
  let monthNow = dateNow.getMonth() + 1;
  let yearNow = dateNow.getFullYear();
  let hourNow = dateNow.getHours();
  let minNow = dateNow.getMinutes();
  let count_day = 0, count_hour = 0, count_min = 0;
  let count_day_isSet = false;
  let isOver = false;

  debugger;
  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  $(_config.target+' .day .word').innerHTML = _config.dayWord;
  $(_config.target+' .hour .word').innerHTML = _config.hourWord;
  $(_config.target+' .min .word').innerHTML = _config.minWord;
  $(_config.target+' .sec .word').innerHTML = _config.secWord; 

  const updateTime = () => {

    const tarDate = $(_config.target).getAttribute('data-date').split('-');
  const day = parseInt(tarDate[2]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[0]);
  let tarTime = $(_config.target).getAttribute('data-time');
  let tarhour, tarmin;

  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  let months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateNow = new Date();
  let dayNow = dateNow.getDate();
  let monthNow = dateNow.getMonth() + 1;
  let yearNow = dateNow.getFullYear();
  let hourNow = dateNow.getHours();
  let minNow = dateNow.getMinutes();
  let count_day = 0, count_hour = 0, count_min = 0;
  let count_day_isSet = false;
  let isOver = false;

  debugger;
  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  $(_config.target+' .day .word').innerHTML = _config.dayWord;
  $(_config.target+' .hour .word').innerHTML = _config.hourWord;
  $(_config.target+' .min .word').innerHTML = _config.minWord;
  $(_config.target+' .sec .word').innerHTML = _config.secWord; 


    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;
    debugger
    if(distance == 0){
      audio.play();
    }
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    requestAnimationFrame(updateTime);

    $(_config.target+' .day .num').innerHTML = addZero(days);
    $(_config.target+' .hour .num').innerHTML = addZero(hours);
    $(_config.target+' .min .num').innerHTML = addZero(minutes);
    $(_config.target+' .sec .num').innerHTML = addZero(seconds);

    


    // If the count down is over, write some text
    if (distance < 0) {
      
      // $(".countdown").innerHTML = "Date EXPIRED";
      $(_config.target+' .day .num').innerHTML = 0;
      $(_config.target+' .hour .num').innerHTML = 0;
      $(_config.target+' .min .num').innerHTML = 0;
      $(_config.target+' .sec .num').innerHTML = 0;
      // audio.play();

      testClicked();
    }
  }

  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;

