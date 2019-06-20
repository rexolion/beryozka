import React from 'react';
import { connect } from 'react-redux'; 
import { buildings } from '../../data/buildings';
import Logo from '../../components/Logo/logo';
import Search from '../../components/Search/search';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Cards from '../../components/Cards/cards';
import {openItemModal} from '../../redux/Actions/actions'
import BigMap from '../../components/BigMap/bigMap';

const SearchPageConnected = ({authorized, itemModalIsOpen, openItemModal}) => {
    const locations = buildings.map(val => val.location);

    const handleContainerClick = () => {
        itemModalIsOpen && openItemModal(false);
    }

    return (
    <div onClick={handleContainerClick} className={itemModalIsOpen ? "Container_blur" : "Container"}>
        <SideBarWrap>
        <Logo />
        {authorized ? <Search /> : "You're not authorized"}
        <Cards />
        </SideBarWrap>
        <BigMap markers={locations}/>
    </div>
    );
};


function mapDispatchToProps(dispatch) {
    return {
        openItemModal: (toogle) => dispatch(openItemModal(toogle)) 
    };
};

const mapStateToProps = state => ({ authorized: state.authorized, itemModalIsOpen: state.itemModalIsOpen });

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPageConnected);

export default SearchPage;