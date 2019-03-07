import React from 'react';
import CartView from '../Cart/CartView';
import { Link } from 'react-router-dom';
import { Redirect } from'react-router';
class Confirmation extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    


    handleSubmit() {
        if(JSON.parse(localStorage.getItem('products')) == null) {
            console.log("penis")
        }else {
            this.postOrder();
            console.log(this.state);
            this.setState({redirect: true});   
            localStorage.removeItem("products");
        }   
    };

    postOrder(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        // console.log(response);
        fetch('http://localhost:3600/api/orders/' + user.telephone, {
        method: 'POST',
        // mode: 'CORS',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);

    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/cart/checkout/complete" />;
          }
        return (
            <div>
                <h1>Review cart before purchase</h1>
                <div className="container">
                    <button type="submit" onClick={this.handleSubmit} value="Continue" className="btn btn-primary" style={{ float: 'right', marginTop: 10,}}>Submit</button>
                    <Link to="/"><button className="btn btn-danger" style={{ float: 'right', marginTop: 10}}>Cancel</button></Link>
                </div>
                <span> </span>
                <CartView />
            </div>
        )
    }
}

export default Confirmation;