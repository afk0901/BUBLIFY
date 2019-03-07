import React from 'react';
import PropTypes from 'prop-types';
import BundleProductsView from '../ItemViews/BundleProductsView';

const BundleListProductsView = props => {
    const { listv } = props;

    
    return listv.map(item => <BundleProductsView key={item.bundleName} {...item} />);
};

BundleListView.propTypes = {
    listv: PropTypes.array.isRequired
};

export default BundleListProductsView;