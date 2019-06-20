import React from 'react';
import {connect} from 'react-redux';
import {buildings} from '../../data/buildings';
import CardsItemModal from './CardsItemModal/cardsItemModal';
import CardsItemContainer from './CardsItemContainer/cardsItemContainer';
import './cards.css';

const CardsConnected = ({itemModalIsOpen}) => (
    <div className="Cards">
        {buildings.map(val => <CardsItemContainer building={val} key={val.id} /> )}
        <CardsItemModal isOpen={itemModalIsOpen}/>

    </div>
);

const mapStateToProps = state => ({itemModalIsOpen: state.itemModalIsOpen});

const Cards = connect(mapStateToProps)(CardsConnected);

export default Cards;