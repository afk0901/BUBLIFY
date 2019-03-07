import React from 'react';

const CartViewItem = props => {

    const { id, name, price, image, description } = props;
   
    return (

      
            <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{description}</p>
                <p>{price} ISK</p>
                <a href="#" className="btn btn-danger" onClick={() => alert("CLEICKE")}>Remove</a>
            </div>
        </div>
     

        
    ) 
}

export default CartViewItem;

