import React from 'react';
import PropTypes from 'prop-types';
import CardsItemInfoHeading from './CardsItemInfoHeading/cardsItemInfoHeading';
import CardsItemInfoSubhead from './CardsItemInfoSubhead/cardsItemInfoSubhead';
import CardsItemInfoRow from './CardsItemInfoRow/cardsItemInfoRow';
import './cardsItemInfo.css';

const CardsItemInfo = ({building}) => {
    const {name,address,floor,rooms,area} = building;
    const info = [floor,rooms,area];
    return(
        <div className="Cards-item-info">
            <CardsItemInfoHeading heading={name}/>
            <CardsItemInfoSubhead heading={address}/>
            <CardsItemInfoRow values={info}/>
        </div>
    )
};

CardsItemInfo.propTypes = {
    building: PropTypes.object
};

export default CardsItemInfo;