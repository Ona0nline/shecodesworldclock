function displaylagos(){
  let lagoselem = document.getElementById("lagos");
let lagoselemcontainer = document.getElementById("lagos-container")
let lagosdate = lagoselemcontainer.querySelector(".date")
let lagostime = lagoselemcontainer.querySelector(".time")
lagosmoment = moment();
lagosdate.innerHTML = lagosmoment.format("MMMM Do, YYYY")
lagostime.innerHTML = lagosmoment.tz("Africa/Lagos").format("h:mm:ss [<small>]A[</small>]")

}

displaylagos()
setInterval(displaylagos,1000)


function displaybloem(){
  let bloemelem = document.getElementById("bloemfontein");
let bloemelemcontainer = document.getElementById("bloemcon")
let bloemdate = bloemelemcontainer.querySelector(".date")
let bloemtime = bloemelemcontainer.querySelector(".time")
bloemmoment = moment();
bloemdate.innerHTML = bloemmoment.format("MMMM Do, YYYY")
bloemtime.innerHTML = bloemmoment.tz("Africa/Bloemfontein").format("h:mm:ss [<small>]A[</small>]")

}

setInterval(displaybloem,1000)

// City update

function updateCity(event){
  let cityTimeZone = event.target.value
  
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  console.log(cityTimeZone)
  let cityTime = moment().tz(cityTimeZone)
  let citiesElement = document.getElementById("cities")
  let cityName = cityTimeZone.split("/")[1];

  citiesElement.innerHTML = 
  `<div class="cities">
        <div  class="lagos-container">
          <div class="city" id="lagos"><h2>${cityName}</h2></div>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>

      </div>

      </div>

  `

}

let citiesSelectElem = document.getElementById("select");
citiesSelectElem.addEventListener("change",updateCity)
