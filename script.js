function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function prevPage() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
}

function submitRequest() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}

document.querySelectorAll('.item-count').forEach(item => {
    item.addEventListener('input', function () {
        let itemId = this.dataset.itemId;
        let count = this.value;
        document.getElementById(itemId + 'Count').textContent = `(${count})`;
    });
});

function initMap() {
    document.getElementById('map').style.display = 'block';
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function(event) {
        geocodeLatLng(geocoder, map, infowindow, event.latLng);
    });
}

function geocodeLatLng(geocoder, map, infowindow, latlng) {
    geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                map.setZoom(11);
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, new google.maps.Marker({
                    position: latlng,
                    map: map
                }));
                document.getElementById('address').value = results[0].formatted_address;
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}


