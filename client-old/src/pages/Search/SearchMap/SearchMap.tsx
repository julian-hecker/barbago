import React from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { ISearchResult } from '../SearchResult';

import icon from '../../../assets/marker-icon.png';

const pinIcon = L.icon({
  iconUrl: icon,
  iconAnchor: [12.5, 50],
  iconSize: [25, 50],
  popupAnchor: [0, -25],
});

const SearchMap: React.FC<ISearchMapProps> = ({ results }) => {
  return (
    <MapContainer
      center={[41.0, -73.83]}
      zoom={10}
      minZoom={4}
      scrollWheelZoom={true}
      dragging={true}
      maxBoundsViscosity={1}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        attribution="&copy; Stamen Maps"
      />
      {results.map(({ name, position }, index) =>
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

interface ISearchMapProps {
  results: ISearchResult[];
}

export default SearchMap;
