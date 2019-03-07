import React from 'react';
import CartViewHandler from './CartViewHandler'
import { Link } from 'react-router-dom';
class CartView extends React.Component {
    componentDidMount() {
        const myCart = this.getCart();
        const cart = myCart.map(d => {return {id: d.id, name: d.name, price: d.price, image: d.image, description: d.description}});
        this.setState({cart})
        // console.log(this.state, "CartView")

    }

    getCart(){
        if(localStorage.getItem('products') == null) {
            console.log("Cart is empty")
            return [];
        }else {
            var cart = JSON.parse(localStorage.getItem('products'));
            console.log("The cart contains", cart);
            return cart;
        }
    }
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    };
    
    render () {
        return (
            <>
            <h1>Your Cart:</h1>
            <Link to="/cart/checkout"><button href="#" className="btn btn-success" onClick={() => console.log("clicked")  }>Go to checkout</button></Link>
            <CartViewHandler list = { this.state.cart } />
            </>
        )
    }

    
}

export default CartView;