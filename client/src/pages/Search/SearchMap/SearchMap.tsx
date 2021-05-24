import React from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { ISearchResult } from '../SearchResult';

const SearchMap: React.FC<ISearchMapProps> = ({ results }) => {
  // const map = useMap();

  return (
    <MapContainer
      center={[41.0, -73.83]}
      zoom={10}
      minZoom={5}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      maxBoundsViscosity={1}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://maps.stamen.com/">Stamen Maps</a>'
      />
      {results.map(({ name, position }) =>
        position ? (
          <Marker position={position}>
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

// leaflet tiles only load after zoom
// https://stackoverflow.com/questions/40103362/react-leaflet-not-rendering-properly

export default SearchMap;