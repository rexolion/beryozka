import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemContainerNameInfoName.css';

const CardsItemContainerNameInfoName = ({name}) => (
    <h4 className="Cards-item-container-name-info-name">{name}</h4>
);

CardsItemContainerNameInfoName.propTypes = {
    name: PropTypes.string,
};

export default CardsItemContainerNameInfoName;