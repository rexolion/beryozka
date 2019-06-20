import React from 'react';
import ReactDOM from 'react-dom';
import './cardsItemModal.css';

const CardsItemModal = ({isOpen}) => (
    isOpen
        ? ReactDOM.createPortal(<div className="Cards-item-modal"></div>, document.body)
        : null
);


export default CardsItemModal;