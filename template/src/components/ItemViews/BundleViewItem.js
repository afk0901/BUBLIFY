import React from 'react';
import proptypes from 'prop-types';
import BundleProductsView from './BundleProductsView'

const BundleViewItem = props => {
    console.log(props);
    var {name} = props;
    if(props[0] != null) {
    console.log(props[0].bundleName);
    name = props[0].bundleName;
    }

    return (
    
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header"><i className="fa fa-2x fa-times" style={ { float: 'right'} }></i></div>
            <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div className="card-text">
                <BundleProductsView />
                </div>
            </div>
        </div>
    );
};
 /*
    BundleViewItem - contains: 
    - the id of the bundle itself, 
    - items that contains the items of the product(s) to show, depending on the bundle
    -name - the bundle name
    
 */
BundleViewItem.proptypes = {
    //id: proptypes.string.isRequired,
    items: proptypes.array.isRequired,
    name: proptypes.string.isRequired
}

export default BundleViewItem;