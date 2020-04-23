import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class App extends Component {
    state = {
        lat: 1.3521,
        lng: 103.8198,
        zoom: 12,
    }


    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom} style={{ height: '700px' }}>
                <TileLayer
                    attribution='<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
                    url="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Son Konum
        </Popup>
                </Marker>
            </Map>
        )
    }
}