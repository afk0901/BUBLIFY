import React from 'react';
import ListView from '../ListView/ListView';
import {Link} from 'react-router-dom';

class ProductViewContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3600/api/bubbles').then(resp => {
            if(resp.ok) { return resp.json(); } 
        }).then(data => {
            const bubbleProducts = data.map(d => {return {id: d.id, name: d.name, price: d.price, image: d.image, description: d.description, count: 0}});
            this.setState({ bubbleProducts });
            console.log(this.state);
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bubbleProducts: []
        };
    }
    render(){
        return (
            <>
            <div className = "container">
                <h1>Products!</h1>
                <Link to="/cart/checkout"><button href="#" className="btn btn-success" onClick={() => console.log("clicked")  }>Go to checkout</button></Link>

                <ListView list = { this.state.bubbleProducts } />
            </div>
            </>
        )
    }
};

export default ProductViewContainer;