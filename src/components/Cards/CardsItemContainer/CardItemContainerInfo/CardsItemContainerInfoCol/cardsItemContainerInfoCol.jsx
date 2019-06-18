import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemContainerInfoCol.css';

const CardsItemContainerInfoCol = ({topHead, bottHead}) => (
    <div className="Cards-item-container-info-col">
        <h6 className="Cards-item-container-info-col-sm">{topHead}</h6>
        <h5 className="Cards-item-container-info-col-md">{bottHead}</h5>
    </div>
);

CardsItemContainerInfoCol.propTypes = {
    topHead: PropTypes.string,
    bottHead: PropTypes.string
};

export default CardsItemContainerInfoCol;