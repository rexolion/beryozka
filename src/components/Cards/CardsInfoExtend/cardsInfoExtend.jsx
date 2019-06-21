import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {activateExtendedSearch} from '../../../redux/Actions/actions';
import './cardsInfoExtend.css';

const CardsInfoExtendConnected = ({amount,activateExtendedSearch,extendedSearchActivated}) => {
    const handleExtendClick = () => activateExtendedSearch(!extendedSearchActivated);

    return (
    <div className="Card-info">
        <h4 className="Card-info-amount">{`Найдено ${amount} квартир`}</h4>
        <h4 onClick={handleExtendClick} className="Card-info-extend">Расширенный поиск</h4>
    </div>
)};

function mapDispatchToProps(dispatch) {
    return {
        activateExtendedSearch: (toogle) => dispatch(activateExtendedSearch(toogle)) 
    };
};

const mapStateToProps = state => ({extendedSearchActivated: state.extendedSearchActivated});

const CardsInfoExtend = connect(mapStateToProps, mapDispatchToProps)(CardsInfoExtendConnected);

CardsInfoExtend.propTypes = {
    amount: PropTypes.number
};

export default CardsInfoExtend