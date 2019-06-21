import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemInfoSubhead.css';

const CardsItemInfoSubhead = ({heading}) => (
    <h3 className="Cards-item-info-subhead">{heading}</h3>
);

CardsItemInfoSubhead.propTypes = {
    heading: PropTypes.string
};

export default CardsItemInfoSubhead;