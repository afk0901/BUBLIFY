import React from 'react';
import PropTypes from 'prop-types';

const ProductViewItem = props => {
    const {name, price, image } = props;
    
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name }<i className="fa fa-cart-plus" style={{ float: 'right' }} ></i></div>
            <div className="card-body">
            <img src = {image} className="card-image" >test</img>
                <h4 className="card-title">Prices</h4>
                <div className="card-text">
                    <div>{price}<span> ISK yeah</span></div>
                </div>
            </div>
        </div>
    )
}
/* 
Makes it available to see the product.
    name - The product name
    price - The product price
    image - The product image string
*/
ProductViewItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default ProductViewItem;