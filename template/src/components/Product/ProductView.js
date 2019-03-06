import React from 'react';
import PropTypes from 'prop-types';
import ProductViewItem from './ProductViewItem';

const ProductView = props => {
    const { list } = props;
    return list.map(item => <ProductViewItem key={item.id} {...item} />);
};

ProductView.propTypes = {
    list: PropTypes.array.isRequired
};

export default ProductView;