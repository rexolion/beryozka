import React from 'react';
import './cardsItemInfoCol.css';
import PropTypes from 'prop-types';

const CardsItemInfoCol = ({heading, value}) => (
    <div className="Cards-item-info-col">
        <h5 className="Cards-item-info-col-heading">{heading}</h5>
        <h6 className="Cards-item-info-col-value">{value}</h6>
    </div>
);

CardsItemInfoCol.propTypes = {
    heading: PropTypes.string,
    value: PropTypes.string
}

export default CardsItemInfoCol;