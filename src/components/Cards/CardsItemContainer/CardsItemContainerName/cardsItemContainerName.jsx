import React from 'react';
import PropTypes from 'prop-types';
import CardsItemContainerNameImage from './CardsItemContainerNameImage/cardsItemContainerNameImage';
import CardsItemContainerNameInfo from './CardsItemContainerNameInfo/cardsItemContainerNameInfo';
import './cardsItemContainerName.css';

const CardsItemContainerName = ({name, address, imgName}) => (
    <div className="Cards-item-container-name">
        <CardsItemContainerNameImage name={name} imgName={imgName}/>
        <CardsItemContainerNameInfo name={name} address={address}/>
    </div>
);

CardsItemContainerName.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    imgName: PropTypes.string,
};

export default CardsItemContainerName;

