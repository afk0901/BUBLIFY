import React from 'react';
import PropTypes from 'prop-types';
import BundleViewItem from '../ItemViews/BundleViewItem';

const BundleListView = props => {
    const { listv } = props;

    
    return listv.map(item => <BundleViewItem key={item.bundleName} {...item} />);
};

BundleListView.propTypes = {
    listv: PropTypes.array.isRequired
};

export default BundleListView;