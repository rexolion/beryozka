import React from 'react';
import PropTypes from 'prop-types';
import CardsItemContainerName from './CardsItemContainerName/cardsItemContainerName';
import CardsItemContainerInfo from './CardItemContainerInfo/cardsItemContainerInfo';
import './cardsItemContainer.css';

const CardsItemContainer = ({building}) => {
    const {imgName,name,address, area, floor, rooms} = building;

    return(
         <div className="Cards-item-container">
            <CardsItemContainerName imgName={imgName} name={name} address={address} />
            <CardsItemContainerInfo area={area} floor={floor} rooms={rooms} />
        </div>
    )
};

CardsItemContainer.propTypes = {
    building: PropTypes.object
};

export default CardsItemContainer;