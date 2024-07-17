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


function displaybloem(){
  let bloemelem = document.getElementById("bloemfontein");
let bloemelemcontainer = document.getElementById("bloemcon")
let bloemdate = bloemelemcontainer.querySelector(".date")
let bloemtime = bloemelemcontainer.querySelector(".time")
bloemmoment = moment();
bloemdate.innerHTML = bloemmoment.format("MMMM Do, YYYY")
bloemtime.innerHTML = bloemmoment.tz("Africa/Bloemfontein").format("h:mm:ss [<small>]A[</small>]")

}

displaybloem()


function displaymiami(){
  let miamielem = document.getElementById("miami");
let miamielemcontainer = document.getElementById("miamicon")
let miamidate = miamielemcontainer.querySelector(".date")
let miamitime = miamielemcontainer.querySelector(".time")
miamimoment = moment();
miamidate.innerHTML = miamimoment.format("MMMM Do, YYYY")
miamitime.innerHTML = miamimoment.tz("America/New_York").format("h:mm:ss [<small>]A[</small>]")

}

displaymiami()

