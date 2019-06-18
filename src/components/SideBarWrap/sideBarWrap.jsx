import React from 'react'
import PropTypes from 'prop-types';
import './sideBarWrap.css';

class SideBarWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const {children} = this.props;

        return ( 
            <aside className="SideBar-wrap">
                {children}
            </aside>
         );
    }
}

SideBarWrap.propTypes = {
    children: PropTypes.any,
};

export default SideBarWrap;