import React from 'react';
import PropTypes from 'prop-types';
import './cardsItemContainerInfo.css';
import CardsItemContainerInfoCol from './CardsItemContainerInfoCol/cardsItemContainerInfoCol';

const CardsItemContainerInfo = ({floor, area, rooms}) => (
    <div className="Cards-item-container-info">
        <CardsItemContainerInfoCol topHead={'Этаж'} bottHead={floor} />
        <CardsItemContainerInfoCol topHead={'Площадь'} bottHead={area} />
        <CardsItemContainerInfoCol topHead={'Комнаты'} bottHead={rooms} />
    </div>
);

CardsItemContainerInfo.propTypes = {
    floor: PropTypes.number,
    area: PropTypes.string,
    rooms: PropTypes.number
};

export default CardsItemContainerInfo;