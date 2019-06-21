import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemInfoHeading.css';

const CardsItemInfoHeading = ({heading}) => (
    <h4 className="Cards-item-info-heading">{heading}</h4>
);

CardsItemInfoHeading.propTypes ={
    heading: PropTypes.string
};

export default CardsItemInfoHeading;