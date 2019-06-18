import React from 'react';
import './cards.css';
import {buildings} from '../../data/buildings';
import CardsItemContainer from './CardsItemContainer/cardsItemContainer';

const Cards = () => (
    <div className="Cards">
        {buildings.map(val => <CardsItemContainer building={val} key={val.id} /> )}
    </div>
);

export default Cards;