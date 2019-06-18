import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemContainerNameImage.css';

const CardsItemContainerNameImage = ({imgName, name}) => (
    <img classname="Cards-item-container-name-image" src={`assets/buildings/${imgName}`} alt={name}/>
);

CardsItemContainerNameImage.propTypes = {
    imgName: PropTypes.string,
    name: PropTypes.string
};

export default CardsItemContainerNameImage;

