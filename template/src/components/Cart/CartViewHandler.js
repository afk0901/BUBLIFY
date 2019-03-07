import React from 'react';
import PropTypes from 'prop-types';
import CartViewItem from './CartViewItem';

const CartViewHandler = props => {
    const { list } = props;
    return list.map(item => <CartViewItem key={item.id} {...item} />);
};

/*
    This array contains the products from the localstorage.
 */
CartViewHandler.propTypes = {
    list: PropTypes.array.isRequired
};

export default CartViewHandler;


