import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './sideBarWrap.css';
import LoginForm from '../LoginForm/loginForm';
import Search from '../Search/search';


class SideBarWrapConnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const {children, authorized} = this.props;

        return ( 
            <aside className="SideBar-wrap">
                {authorized ? <Search/> : <LoginForm/>}
                {children}
            </aside>
         );
    }
}

SideBarWrapConnected.propTypes = {
    children: PropTypes.any,
    authorized: PropTypes.bool
};

const mapStateToProps = state => ({ authorized: state.authorized});

const SideBarWrap = connect(mapStateToProps)(SideBarWrapConnected);

export default SideBarWrap;