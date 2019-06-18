import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'yandex-map-react';
import './bigMap.css';

const BigMap = ({blurred}) => (
      <div className={blurred ? "Map_blurred" : "Map"} >
          <Map zoom={10} center={[44.948237, 34.100318]}/> 
      </div>
  
);

BigMap.defaultProps = {
    blured: false,
};

BigMap.propTypes = {
    blurred: PropTypes.bool,
}

export default BigMap;
