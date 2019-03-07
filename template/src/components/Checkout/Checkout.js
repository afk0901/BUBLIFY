import React from 'react';
import {Link} from 'react-router-dom';

class Checkout extends React.Component {

    render() {

        return (
            <div>
                <h1>Checkout</h1>
                <Link to="/cart/checkout/storepickup"><button href="#" className="btn btn-info" onClick={() => console.log("clicked")  }>Store pickup</button></Link>
                <Link to="/cart/checkout/delivery"><button href="#" className="btn btn-info button-span" onClick={() => console.log("clicked")  }>Delivery</button></Link>

            </div>
        )
    }
}

export default Checkout;