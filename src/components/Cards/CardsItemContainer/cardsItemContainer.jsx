import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {openItemModal} from '../../../redux/Actions/actions';
import CardsItemContainerName from './CardsItemContainerName/cardsItemContainerName';
import CardsItemContainerInfo from './CardItemContainerInfo/cardsItemContainerInfo';
import './cardsItemContainer.css';

class CardsItemContainerConnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleItemClick = () => {
        this.props.openItemModal(true);
    }

    render() { 
        const {building} = this.props;
        const {imgName,name,address, area, floor, rooms} = building;

        return ( 
            <div onClick={this.handleItemClick} className="Cards-item-container">
                <CardsItemContainerName imgName={imgName} name={name} address={address} />
                <CardsItemContainerInfo area={area} floor={floor} rooms={rooms} />
            </div>
        );
    }
}

CardsItemContainerConnected.propTypes = {
    building: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        openItemModal: (toogle) => dispatch(openItemModal(toogle)) 
    };
};

const mapStateToProps = state => ({itemModalIsOpen: state.itemModalIsOpen});

const CardsItemContainer = connect(mapStateToProps, mapDispatchToProps)(CardsItemContainerConnected);

export default CardsItemContainer;