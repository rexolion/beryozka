import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemImage.css';

const CardsItemImage = ({src,name}) => (
    <img src={`assets/buildings/${src}`} alt={name} className="Cards-item-image"/>
);

CardsItemImage.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
};

export default CardsItemImage;