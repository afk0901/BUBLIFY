import React from 'react';
import PropTypes from 'prop-types';
import OldOrderViewItem from './OldOrderViewItem';

const OldOrderHandler = props => {
    const { list } = props;
    return list.map(item => <OldOrderViewItem key={item.id} {...item} />);
};

// OldOrderViewItem.propTypes = {
//     list: PropTypes.array.isRequired
// };

export default OldOrderHandler;