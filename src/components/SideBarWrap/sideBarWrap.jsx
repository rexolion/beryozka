import React from 'react'
import PropTypes from 'prop-types';
import './sideBarWrap.css';

const SideBarWrap = ({ children }) => (
    <aside className="SideBar-wrap">
        {children}
    </aside>
);

SideBarWrap.propTypes = {
    children: PropTypes.any
};

export default SideBarWrap;