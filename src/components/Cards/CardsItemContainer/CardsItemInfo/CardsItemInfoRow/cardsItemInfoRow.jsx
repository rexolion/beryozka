import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemInfoRow.css';
import CardsItemInfoCol from './CardsItemInfoCol/cardsItemInfoCol';

const CardsItemInfoRow = ({values}) => (
    <div className="Cards-item-info-row">
        <CardsItemInfoCol heading={"Этаж"} value={values[0]}/>
        <CardsItemInfoCol heading={"Комнат"} value={values[1]}/>
        <CardsItemInfoCol heading={"Площадь"} value={values[2]}/>
    </div>
);

CardsItemInfoRow.propTypes = {
    values: PropTypes.array
};

export default CardsItemInfoRow;