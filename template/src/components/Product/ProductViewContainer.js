import React from 'react';
import ProductView from './ProductView';

class ProductViewContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3600/api/bubbles').then(resp => {
            if(resp.ok) { return resp.json(); } 
        }).then(data => {
            const bubbleProducts = data.map(d => {return {id: d.id, name: d.name, price: d.price, image: d.image}});
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
                <ProductView list = { this.state.bubbleProducts } />
            </div>
            </>
        )
    }
};

export default ProductViewContainer;