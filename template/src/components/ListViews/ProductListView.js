import React from 'react';
import PropTypes from 'prop-types';
import ProductViewItem from '../ItemViews/ProductViewItem';

const ProductListView = props => {
    const { list } = props;
    return list.map(item => <ProductViewItem key={item.id} {...item} />);
};

ProductListView.propTypes = {
    list: PropTypes.array.isRequired
};

export default ProductListView;