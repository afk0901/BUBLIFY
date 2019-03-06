import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
// import { addToCart } from '../Product/ProductViewItemDetails'

const ViewItem = props => {

    const { id, name, price, image, description } = props;
    console.log("This is the data passed on ", name)
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name }
                <Link to={"/bubbles/" + id}><button className="fa fa-info" data-toggle="tooltip" title="Product Details" ></button></Link>
                <button type="button" className="fa fa-cart-plus" /*</div></div>onClick={() => addToCart(this.props)}*/></button>
            </div>
            <div className="card-body">
             <img src = {image} className="card-image"></img>
                <h4 className="card-title">Price</h4>
                <div className="card-text">
                    <div>{price}<span> ISK</span></div>
                </div>
            </div>
        </div>
    )

}
ViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default ViewItem;