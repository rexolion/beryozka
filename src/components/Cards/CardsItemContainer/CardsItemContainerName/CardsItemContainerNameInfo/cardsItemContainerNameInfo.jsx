import React from 'react';
import PropTypes from 'prop-types';
import CardsItemContainerNameInfoName from './CardsItemContainerNameInfoName/cardsItemContainerNameInfoName';
import CardsItemContainerNameInfoAddress from './CardsItemContainerNameInfoAddress/cardsItemContainerNameInfoAddress';
import './cardsItemContainerNameInfo.css';

const CardsItemContainerNameInfo = ({name, address}) => (
    <div className="Cards-item-container-name-info">
        <CardsItemContainerNameInfoName name={name} />
        <CardsItemContainerNameInfoAddress address={address}/>
    </div>
);

CardsItemContainerNameInfo.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string
};

export default CardsItemContainerNameInfo;