import React from 'react';
import CartView from '../Cart/CartView';
import { Link } from 'react-router-dom';
class Confirmation extends React.Component {

    handleSubmit(data) {
        console.log("Data submitted", data);
    };

    render(){
        return (
            <div>
                <h1>Review cart before purchase</h1>
                <div className="container">
                    <input type="submit" onSubmit={this.handleSubmit()} value="Continue" className="btn btn-primary" style={{ float: 'left', marginTop: 10,}} />
                    <Link to="/"><button className="btn btn-danger" style={{ float: 'right', marginTop: 10}}>Cancel</button></Link>
                </div>
                <span> </span>
                <CartView />
            </div>
        )
    }
}

export default Confirmation;