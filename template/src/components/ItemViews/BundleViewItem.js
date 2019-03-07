import React from 'react';
import proptypes from 'prop-types';
import BundleProductViewItem from '../ItemViews/BundleProductsViewItem'

const BundleViewItem = props => {
    const {items, name} = props;
    
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <div className="card-text">
                <span><BundleProductViewItem bundle = {items}/></span>
                </div>
            </div>
            </div>
    );
};
/*
    items - Array of product id's so that it's known what product should be in one boundle
    name - The name of the boundle. 
*/
BundleViewItem.proptypes = {
    items: proptypes.number.isRequired,
    name: proptypes.string.isRequired
}

export default BundleViewItem;