import React from 'react';
import proptypes from 'prop-types';

const BundleViewItem = props => {
    const {id, items, name} = props;

    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header"> { name }<i className="fa fa-2x fa-times" style={ { float: 'right'} }></i></div>
            <div className="card-body">
            <h4 className="card-title">Bundles</h4>
            <div className="card-text">
                <div><strong>items</strong>
                <span>{ items }</span>
                </div>
                <div><strong>id</strong>
                <span>{ id }</span>
                </div>
            </div>
            </div>
        </div>
    );
};

BundleViewItem.proptypes = {
    id: proptypes.number.isRequired,
    items: proptypes.number.isRequired,
    name: proptypes.string.isRequired
}

export default BundleViewItem;