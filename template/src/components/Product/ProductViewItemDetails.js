import React from 'react';
import { Link } from 'react-router-dom';

class ProductViewItemDetails extends React.Component{
    
    componentDidMount() {
       var newItem =  fetch('http://localhost:3600/api/bubbles').then(resp => {
            if(resp.ok) { return resp.json(); } 
            
        }).then(data => {
            const bubbleProducts = data.map(d => {return {id: d.id, name: d.name, price: d.price, image: d.image, description: d.description, count: 0}}).find((item) => item.id == this.props.match.params.id);
            this.setState({ bubbleProducts });
            // console.log(bubbleProducts);
        });
    }
    constructor() {
        super();
        this.state = {
            bubbleProducts: {}
        };
    }
    addToCart(props){
        
        var item = props;
        if(localStorage.getItem('products') == null) {
            var list = [];
            item.count = 1;
            console.log("Pushing into empty array");
            list.push(item);
            localStorage.setItem('products', JSON.stringify(list))
        }else {
            var list = JSON.parse(localStorage.getItem('products'));
           
                    list.push(item);
                    localStorage.setItem('products', JSON.stringify(list));
                
           
        }
            
        console.log(" added to cart", list);
    }
     

    render () {
        // console.log(this.state.bubbleProducts.name);
        return (
        <div> <h1>Details!</h1>
            <div className="card text-black bg-secondary mb-3">
                <div className="card-header">{ this.state.bubbleProducts.name }
                    <Link to={"/bubbles"}><button className="fa fa-arrow-left" data-toggle="tooltip" title="Back to products"></button></Link>
                    <button className="fa fa-cart-plus" data-toggle="tooltip" title="Add to cart" onClick={() => this.addToCart(this.state.bubbleProducts)}></button>
                </div>
                <div className="card-body">
                    <img src = {this.state.bubbleProducts.image} className="card-image"></img>
                    <div>
                        <p><strong>{this.state.bubbleProducts.description}</strong></p>
                    </div>
                <h4 className="card-title">Price</h4>
                <div className="card-text">
                <div>{this.state.bubbleProducts.price}<span> ISK</span></div>
                </div>
                </div>
            </div>
        </div> 
        )
    }
}


export default ProductViewItemDetails;
