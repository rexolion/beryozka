import React from 'react';
import { Map } from 'yandex-map-react';
import './bigMap.css';

const BigMap = () => (
      <div className="Map">
          <Map zoom={10} center={[44.948237, 34.100318]}/> 
      </div>
  
);

export default BigMap;
