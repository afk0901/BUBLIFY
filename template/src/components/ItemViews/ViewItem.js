import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

const ViewItem = props => {
    const { id, name, price, image } = props;
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name }
                <Link to={"/bubbles/" + id}><i className="fa fa-info" ></i></Link>
                <i className="fa fa-cart-plus" ></i>
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