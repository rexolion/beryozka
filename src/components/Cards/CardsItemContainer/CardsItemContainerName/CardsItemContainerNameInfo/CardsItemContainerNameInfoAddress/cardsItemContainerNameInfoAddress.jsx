import PropTypes from 'prop-types';
import React from 'react';
import './cardsItemContainerNameInfoAddress.css';

const CardsItemContainerNameInfoAddress = ({address}) => (
    <small className="Card-item-container-name-info-address">
        {address}
    </small>
);

CardsItemContainerNameInfoAddress.propTypes = {
    address: PropTypes.string
};

export default CardsItemContainerNameInfoAddress;