import React from 'react';
import {Link} from 'react-router-dom';

class Checkout extends React.Component {

    render() {

        return (
            <div>
                <h1>Checkout</h1>
                <span><Link to="/cart/checkout/storepickup"><button href="#" className="btn btn-info" onClick={() => console.log("clicked")  }>Store pickup</button></Link></span>
                <span className="button-span"><Link to="/cart/checkout/storepickup"><button href="#" className="btn btn-info" onClick={() => console.log("clicked")  }>Delivery</button></Link></span>

            </div>
        )
    }
}

export default Checkout;