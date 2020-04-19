
export const mapService = {
    init,
    setCurrPosition,

}

function init() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showMap, handleLocationError);
}

function setCurrPosition() {
    
    navigator.geolocation.getCurrentPosition((position) => {
                  
                const lat =  position.coords.latitude;
                const long =  position.coords.longitude;

                initMap(lat, long)
            })
}

function copyLoc() {
    navigator.geolocation.getCurrentPosition((position) => {
                  
    })
}



function showMap(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function initMap(lat, lng) {
    //            if (!lat) lat = 32.0749831;
    //            if (!lng) lat = 34.9120554;
    var elMap = document.querySelector('.map-container');
    var options = {
        center: { lat, lng },
        zoom: 16
    };

    var map = new google.maps.Map(
        elMap,
        options
    );

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    });
}
