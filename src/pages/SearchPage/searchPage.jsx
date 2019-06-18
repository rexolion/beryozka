import React from 'react';
import { connect } from 'react-redux'; 
import Logo from '../../components/Logo/logo';
import Search from '../../components/Search/search';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Cards from '../../components/Cards/cards';

const SearchPageConnected = ({authorized}) => (
    <div className="Container">
        <SideBarWrap>
        <Logo />
        {authorized ? <Search /> : "You're not authorized"}
        <Cards />
        </SideBarWrap>
    </div>
);

const mapStateToProps = state => ({ authorized: state.authorized});

const SearchPage = connect(mapStateToProps)(SearchPageConnected);

export default SearchPage;