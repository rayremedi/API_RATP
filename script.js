
var apiLignes = "https://api-ratp.pierre-grimaud.fr/v4/lines/metros";

// Variable Station Alesia ligne 4

var apiDestinations = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/4";
var apiHorairesR = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/alesia/R"
var apiHorairesA = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/alesia/A"
var apiStation = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/4"

var code = document.querySelector("#code");
var direction = document.querySelector("#direction");
var direction2 = document.querySelector("#direction2");

//Station Barbes Rochechouart ligne 2
var apiDestinations2 = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/2";
var apiHoraires2R = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/2/barbes-rochechouart/R"
var apiHoraires2A = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/2/barbes-rochechouart/A"
var apiStation2 = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/2"

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
    //   console.log(data);
      horaireA.innerHTML = data.result.schedules[0].message;
      horaireA2.innerHTML = data.result.schedules[1].message;
     
  })
  fetch(apiHorairesA,{
    method:"get"
})
.then(response=>response.json())
.then(data=>{
    // console.log(data);
    horaireR.innerHTML = data.result.schedules[0].message;
    horaireR2.innerHTML = data.result.schedules[1].message;
   
})
      fetch(apiStation,{
          method:"get"
      })
      .then(response=>response.json())
      .then(data=>{
        //   console.log(data);
          station.innerHTML =  data.result.stations[24].name;
      })
          // LIGNE 2 ////////////////////////////////////////////////////////////////////////////////
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
                codeLigne2.innerHTML = "M " + data.result.metros[2].code;
            })
            fetch(apiHoraires2R,{
                method:"get"
            })
            .then(response=>response.json())
            .then(data=>{
                // console.log(data);
                horaire2A.innerHTML = data.result.schedules[0].message;
                horaire2A2.innerHTML = data.result.schedules[1].message;
               
            })
            fetch(apiHorairesA,{
                method:"get"
            })
            .then(response=>response.json())
            .then(data=>{
                // console.log(data);
                horaire2R.innerHTML = data.result.schedules[0].message;
                horaire2R2.innerHTML = data.result.schedules[1].message;
               
            })
            fetch(apiStation2,{
                method:"get"
            })
            .then(response=>response.json())
            .then(data=>{
                // console.log(data);
                station2.innerHTML =  data.result.stations[12].name;
            })
}

//Rappeler la fonction active ses paramètres
callApi();

