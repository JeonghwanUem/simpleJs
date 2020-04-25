const COORDS = 'coords';

function handleGeoSuccess(position){
    Console.log(position)
}

function handleGoeError(){
    Console.log('csant access');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGoeError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        // get weather
    }
}

function init(){
    loadCoords();
}

init();