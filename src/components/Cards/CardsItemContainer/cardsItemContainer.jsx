import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CardsItemImage from './CardsItemImage/cardsItemImage';
import CardsItemInfo from './CardsItemInfo/cardsItemInfo';
import {openItemModal} from '../../../redux/Actions/actions';
import './cardsItemContainer.css';

const CardsItemContainerConnected = ({building, openItemModal}) => {
    const handleItemClick = () => openItemModal(true);
    return (
        <div onClick={handleItemClick} className="Cards-item-container">
            <CardsItemImage src={building.imgName} name={building.name}/>
            <CardsItemInfo building={building} />
        </div>
)};


function mapDispatchToProps(dispatch) {
    return {
        openItemModal: toogle => dispatch(openItemModal(toogle))
    }
}

const CardsItemContainer = connect(null, mapDispatchToProps)(CardsItemContainerConnected);

CardsItemContainer.propTypes = {
    building: PropTypes.object,
};

export default CardsItemContainer;