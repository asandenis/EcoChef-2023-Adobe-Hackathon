import './Map.css';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Map() {
  useEffect(() => {
    // Initialize and add the map
    function initMap() {
      var map;
      var bounds = new window.google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      };

      // Display a map on the web page
      map = new window.google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
      map.setTilt(50);

      // Multiple markers location, latitude, and longitude
      var markers = [
        ['Lidl, Sector 6', 44.427368629280586, 26.016098087264254],
        ['Profi Super, Sector 6', 44.425964613245064, 26.018342894127684],
        ['Penny Supermarket, Sector 6', 44.426623546482546, 26.018434089232393],
        ['La doi pasi, Sector 6', 44.426100889826465, 26.019869733755083],
      ];

      // Info window content
      var infoWindowContent = [
        [
          '<div class="info_content">' +
          '<h2>Lidl</h2>' +
          '<h3>Str. Moinești 63, București 061232</h3>' +
          '<Link to="/Recipes"> <button style="background-color: #d9bdc5"> Vezi produse disponibile</button></Link>' +
          '</div>',
        ],
        [
          '<div class="info_content">' +
          '<h2>Profi Super</h2>' +
          '<h3>Bd. Timișoara 73, București 061323</h3>' +
          '<button>Vezi produse disponibile</button>' +
          '</div>',
        ],
        [
          '<div class="info_content">' +
          '<h2>Penny</h2>' +
          '<h3>Bd. Timișoara 56, București 061333</h3>' +
          '<button>Vezi produse disponibile</button>' +
          '</div>',
        ],
        [
          '<div class="info_content">' +
          '<h2>La doi pasi</h2>' +
          '<h3>Bulevardul Timișoara 69, C13 parter, București 061322</h3>' +
          '<button>Vezi produse disponibile</button>' +
          '</div>',
        ],
      ];

      // Add multiple markers to the map
      var infoWindow = new window.google.maps.InfoWindow();
      var marker;

      // Place each marker on the map
      for (var i = 0; i < markers.length; i++) {
        var position = new window.google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: markers[i][0],
        });

        // Add info window to marker
        window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
          };
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
      }

      // Set zoom level
      var boundsListener = window.google.maps.event.addListener(map, 'bounds_changed', function (event) {
        this.setZoom(17);
        window.google.maps.event.removeListener(boundsListener);
      });
    }

    if (window.google) {
      initMap();
    }
  }, []);

  return (
    <div>
      <div id="mapCanvas" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Map;