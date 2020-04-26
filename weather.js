const API_KEY ="8ff70e7b67e7600753b6d90c69cb851c";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeatehr(lat,lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        //console.log(response.json());
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText =`${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeatehr(latitude,longitude);
}

function handleGoeError(){
    console.log('cant access');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGoeError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        // get weather
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeatehr(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();