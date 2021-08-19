import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { useNavigation } from '@react-navigation/core';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

import { MainTabScreenNavProp } from '../../types/navigation';

const pinIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconAnchor: [12.5, 50],
  iconSize: [25, 50],
  popupAnchor: [0, -25],
});

const Map = ({ data }: MapViewProps) => {
  const navigation = useNavigation<MainTabScreenNavProp>();

  return (
    <MapContainer
      center={[41.0, -73.83]}
      zoom={10}
      minZoom={4}
      scrollWheelZoom={true}
      dragging={true}
      maxBoundsViscosity={1}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        attribution="&copy; Stamen Maps"
      />
      {data.map(({ name, position }: any, index) =>
        position ? (
          <Marker position={position} key={index} icon={pinIcon}>
            <Popup>
              <h3>{name}</h3>
              <p>{position}</p>
            </Popup>
          </Marker>
        ) : null,
      )}
    </MapContainer>
  );
};

export default Map;
