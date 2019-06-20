import React from 'react';
import PropTypes from 'prop-types';
import { Map, Placemark, Marker, YMap } from 'yandex-map-react';
import './bigMap.css';

const BigMap = ({blurred, markers}) => {
     console.log(markers)
    return (
      <div className={blurred ? "Map_blurred" : "Map"} >
        <Map zoom={13} center={[44.948237, 34.100318]}>
            {markers && markers.map(val => <Marker lat={val[0]} lon={val[1]} />)}
        </Map>
      </div>)
  
};

BigMap.defaultProps = {
    blurred: false,
};

BigMap.propTypes = {
    blurred: PropTypes.bool,
    markers: PropTypes.array,
}

export default BigMap;
