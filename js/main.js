
function getTown(town) {
    let Weather ;
  let myHttp = new XMLHttpRequest();

  myHttp.open(
    "GET",
    `https://api.weatherapi.com/v1/forecast.json?key=d7dbd06ca71746ee9af04051221201&q=${town}&days=3`
  );
  myHttp.send();
  myHttp.addEventListener("readystatechange", function () {
    console.log(myHttp.readyState);
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      console.log(JSON.parse(myHttp.response));
      Weather = JSON.parse(myHttp.response);
      document.querySelector('#town').innerText=Weather.location.name;
      document.querySelector('.number').innerText= Weather.current.temp_c;
      document.querySelector('#nextDayTempMax').innerText= Weather.forecast.forecastday[1].day.maxtemp_c;
      document.querySelector('#nextDayTempMin').innerText= Weather.forecast.forecastday[1].day.mintemp_c;
      document.querySelector('#dayAfterTempMax').innerText= Weather.forecast.forecastday[2].day.mintemp_c;
      document.querySelector('#dayAfterTempMin').innerText= Weather.forecast.forecastday[2].day.mintemp_c;
      document.getElementById('cond').innerText= Weather.current.condition.text;
      document.querySelector('#condNextDay').innerText= Weather.forecast.forecastday[1].day.condition.text;
      document.querySelector('#condDayAfter').innerText= Weather.forecast.forecastday[2].day.condition.text;
      document.querySelector('#currentImg').src=Weather.current.condition.icon;
      document.querySelector('#nextDayImg').src=Weather.forecast.forecastday[1].day.condition.icon;
      document.querySelector('#dayAfterImg').src=Weather.forecast.forecastday[2].day.condition.icon;

    }
  });
}


/**--------------------------------------------------------------- */

let day = document.getElementById("day");
let date = document.getElementById("date");
let nextDay = document.getElementById("nextDay");
let dayAfter = document.getElementById("dayAfter");

function displayDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday"
  ];

  const months = [
    "January",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July",
    "August ",
    "September  ",
    "October  ",
    "November ",
    "December",
  ];

  let myDate = new Date();
  day.innerHTML = days[myDate.getUTCDay()];
  date.innerHTML = myDate.getDate() + months[myDate.getMonth()];
  nextDay.innerHTML = days[myDate.getUTCDay() + 1];
  dayAfter.innerHTML =  days[myDate.getUTCDay() + 2];
}
displayDate();

/**-------------------------------------------------------------------------------**/

let search = document.getElementById("search");
let Find = document.getElementById("Find");
let town = document.getElementById("town");

Find.addEventListener("click", function () {
    getTown(search.value)
});
search.addEventListener('keyup', function(){
    getTown(search.value)

})