function retrieveLocation(){
    var latVal = parseFloat(document.getElementById("lat").value);
    var lngVal = parseFloat(document.getElementById("lng").value);

    alert(latVal);
    console.log(latVal);
    console.log(lngVal);
    initializeMap(latVal, lngVal);
}

function initializeMap(latParam, lngParam) {
    //var value = retrieveLocation();

    // Map option

    var options = {
        center: {lat: 41.015137, lng: 28.979530},
        zoom: 5
}

// New map
map = new google.maps.Map(document.getElementById("map"), options)



// Marker
const marker = new google.maps.Marker({
    // ANTALYA
    //position:{lat:36.549362, lng: 31.996994},
    position:{lat: latParam, lng: lngParam},
    map:map
});

// InfoWindow
const detailWindow = new google.maps.InfoWindow({
    content: '<h2>Murcia City</h2>'
});

marker.addListener("mouseover", ()=>{
    detailWindow.open(map,marker);
})

}

function initMap() {

    //var value = retrieveLocation();

    // Map option

    var options = {
            center: {lat: 41.015137, lng: 28.979530},
            zoom: 5
    }

    // New map
    map = new google.maps.Map(document.getElementById("map"), options)



    // Marker
    const marker = new google.maps.Marker({
        // ANTALYA
        position:{lat:36.549362, lng: 31.996994},
        //position:{lat: value[0], lng: value[1]},
        map:map
    });

    // InfoWindow
    const detailWindow = new google.maps.InfoWindow({
        content: '<h2>Murcia City</h2>'
    });

    marker.addListener("mouseover", ()=>{
        detailWindow.open(map,marker);
    })

}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  initializeMap(position.coords.latitude, position.coords.longitude);
}

function getBigBenDistance() {
    var bigBenLat = "51.510357";
    var bigBenLng = "-0.116773";
    console.log(bigBenLat);
    var dist = getBigBenDistance(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude), bigBenLat, bigBenLng, "K");
    alert("Distance from current location to Big Ben: " + dist); 
}

function getBigBenDistance(lat1, lon1, lat2, lon2, unit) {
    console.log("Bigben");
    if ((lat1 == lat2) && (lon1 == lon2)) {
        console.log("Bigben1");
        return 0;
    }
    else {
        console.log("Bigben2");
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        console.log(dist);
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        //console.log(dist);
        document.getElementById("result").append(dist);
        //return dist;
    }
}

function getEarthCore() {

}