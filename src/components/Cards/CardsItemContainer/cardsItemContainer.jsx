import React from 'react';
import PropTypes from 'prop-types';
import CardsItemImage from './CardsItemImage/cardsItemImage';
import CardsItemInfo from './CardsItemInfo/cardsItemInfo';
import './cardsItemContainer.css';

const CardsItemContainer = ({building}) => (
    <div className="Cards-item-container">
        <CardsItemImage src={building.imgName} name={building.name}/>
        <CardsItemInfo building={building} />
    </div>
);

CardsItemContainer.propTypes = {
    building: PropTypes.object,
};

export default CardsItemContainer;