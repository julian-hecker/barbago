import React from 'react';

import MapView from './MapView';

const Map = () => {
  const data = [
    {
      name: 'a good barber',
      position: [41.01, -73.83],
    },
    {
      name: 'a stinky barber',
      position: [41.0, -73.84],
    },
    {
      name: 'a cool barber',
      position: [40.99, -73.83],
    },
    {
      name: 'a hipster barber',
      position: [41.0, -73.82],
    },
    {
      name: 'a russian barber',
      position: [41.0, -73.83],
    },
  ];

  return <MapView data={data} />;
};

export default Map;
