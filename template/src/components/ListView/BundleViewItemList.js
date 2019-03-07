import React from 'react';
import PropTypes from 'prop-types';
import BundleViewItem from '../ItemViews/BundleViewItem';

const BundleListView = props => {
    const { list } = props;
    return list.map(item => <BundleViewItem key={item.id} {...item} />);
};

BundleListView.propTypes = {
    list: PropTypes.array.isRequired
};

export default BundleListView;