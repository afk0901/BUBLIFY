import React from 'react';
import PropTypes from 'prop-types';

const CartViewItem = props => {

    const { id, name, price, image, description } = props;

    return (


        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p>{price} ISK</p>
            </div>
        </div>



    )
}

/*
    name - the product name
    price - the product price
    image - the product image url
    description - the product description
 */
CartViewItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default CartViewItem;

