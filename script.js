var apiDestinations = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/4";
var apiLignes = "https://api-ratp.pierre-grimaud.fr/v4/lines/metros";
var apiHorairesA = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/mairie+de+montrouge/R"
var apiHorairesR = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/4/porte+de+clignancourt/R"
var apiStation = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/4"

var code = document.querySelector("#code");
var direction = document.querySelector("#direction");
var direction2 = document.querySelector("#direction2");

//Fetch les datas de l'API

function callApi() {
  fetch(apiDestinations, {
    method: "get"
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      direction.innerHTML = "direction: " + data.result.destinations[0].name;
      direction2.innerHTML = "direction: " + data.result.destinations[1].name;
    });
  fetch(apiLignes,{
      method:"get"
  })
  .then(response=>response.json())
  .then(data=>{
      console.log(data);
      codeLigne.innerHTML = "M " + data.result.metros[4].code;
  })
  fetch(apiHorairesA,{
      method:"get"
  })
  .then(response=>response.json())
  .then(data=>{
      console.log(data);
      horaireA.innerHTML = data.result.schedules[0].message;
      horaireA2.innerHTML = data.result.schedules[1].message;
     
  })
  fetch(apiHorairesR,{
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
          station.innerHTML =  data.result.stations[0].name;
      })
}

//Rappeler la fonction active ses paramètres
callApi();

