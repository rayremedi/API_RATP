var apiDestinations = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/4";
var apiDestinations2 = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/2";

var apiLignes = "https://api-ratp.pierre-grimaud.fr/v4/lines/metros";
var apiHorairesR = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/alesia/R"
var apiHorairesA = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/alesia/A"

var apiStation = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/4"

var code = document.querySelector("#code");
var direction = document.querySelector("#direction");
var direction2 = document.querySelector("#direction2");

//Fetch les datas de l'API

function callApi() {

    // LIGNE 4 ////////////////////////////////////////////////////////////////////////////////
  fetch(apiDestinations, {
    method: "get"
  })
    .then(response => response.json())
    .then(data => {
    //   console.log(data);
      direction.innerHTML = "direction: " + data.result.destinations[1].name;
      direction2.innerHTML = "direction: " + data.result.destinations[0].name;
    });
  fetch(apiLignes,{
      method:"get"
  })
  .then(response=>response.json())
  .then(data=>{
    //   console.log(data);
      codeLigne.innerHTML = "M " + data.result.metros[4].code;
  })
  fetch(apiHorairesR,{
      method:"get"
  })
  .then(response=>response.json())
  .then(data=>{
      console.log(data);
      horaireA.innerHTML = data.result.schedules[0].message;
      horaireA2.innerHTML = data.result.schedules[1].message;
     
  })
  fetch(apiHorairesA,{
    method:"get"
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    horaireR.innerHTML = data.result.schedules[0].message;
    horaireR2.innerHTML = data.result.schedules[1].message;
   
})
      fetch(apiStation,{
          method:"get"
      })
      .then(response=>response.json())
      .then(data=>{
          console.log(data);
          station.innerHTML =  data.result.stations[24].name;
      })
          // LIGNE 4 ////////////////////////////////////////////////////////////////////////////////
          fetch(apiDestinations2, {
            method: "get"
          })
            .then(response => response.json())
            .then(data => {
            //   console.log(data);
              directionA.innerHTML = "direction: " + data.result.destinations[1].name;
              directionR.innerHTML = "direction: " + data.result.destinations[0].name;
            });
            fetch(apiLignes,{
                method:"get"
            })
            .then(response=>response.json())
            .then(data=>{
              //   console.log(data);
                codeLigne.innerHTML = "M " + data.result.metros[2].code;
            })
}

//Rappeler la fonction active ses paramètres
callApi();

