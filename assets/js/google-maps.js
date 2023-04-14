function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 28.6195469, lng: 77.297967};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mayur Vihar, New Delhi' // Title Location
    });
}