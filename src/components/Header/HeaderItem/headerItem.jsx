import React from 'react';
import PropTypes from 'prop-types';
import './headerItem.css';

const HeaderItem = ({name}) => (
    <div className="Header-item">
        {name}
    </div>
);

HeaderItem.defaultProps = {
    name: ""
};

HeaderItem.propTypes = {
    name: PropTypes.string,
}

export default HeaderItem;