import React, { Component } from 'react';
//import L from 'leaflet';
import './App.css';
//import * as L from './onemap-leaflet';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

class App extends Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {

    const center = L.bounds([1.56073, 104.11475], [1.16, 103.502]).getCenter();
    const map = L.map('mapdiv').setView([center.x, center.y], 12);

    const basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 18,
      minZoom: 11
    });

    map.setMaxBounds([[1.56073, 104.1147], [1.16, 103.502]]);

    basemap.addTo(map);
    getLocation();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position) {
      new L.Marker([position.coords.latitude, position.coords.longitude], { bounceOnAdd: false }).addTo(map);
      const popup = L.popup()
        .setLatLng([position.coords.latitude, position.coords.longitude])
        .setContent('You are here!')
        .openOn(map);
    }

  }


  render() {

    return (
      <div>
        <header>

        </header>
        {/* <noscript>You need to enable JavaScript to run this app.</noscript> */}

        <div id='mapdiv'></div>
      </div>
    );
  }
}



export default App;
