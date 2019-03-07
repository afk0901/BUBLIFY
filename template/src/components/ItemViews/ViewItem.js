import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import ProductViewItemDetails from '../Product/ProductViewItemDetails'


const ViewItem = (props) => {
    const addToCart = (props) =>{
        var item = props;
        if(localStorage.getItem('products') == null) {
            var list = [];
            // item.count ++;
            list.push(item);
            console.log("Pushing into empty array");
            localStorage.setItem('products', JSON.stringify(list))
        }else {
            var list = JSON.parse(localStorage.getItem('products'));
            list.push(props);
            localStorage.setItem('products', JSON.stringify(list));
        }
        console.log(" added to cart", list);
        
    }

    const { id, name, price, image, description } = props;
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name }
                <Link to={"/bubbles/" + id}><button className="fa fa-info" data-toggle="tooltip" title="Product Details" ></button></Link>
                <button type="button" className="fa fa-cart-plus" onClick={()=> addToCart(props)}></button>
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