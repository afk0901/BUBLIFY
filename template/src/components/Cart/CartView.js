import React from 'react';
import CartViewHandler from './CartViewHandler'
import OldOrderHandler from './OldOrderHandler';
import { Link } from 'react-router-dom';
class CartView extends React.Component {
    componentDidMount() {
        const myCart = this.getCart();
        const cart = myCart.map(d => {return {id: d.id, name: d.name, price: d.price, image: d.image, description: d.description}});
        this.setState({cart})
        console.log(this.getTel());

        
        fetch('http://localhost:3600/api/orders/' + this.getTel()).then(resp => {
            if(resp.ok) { return resp.json(); } 
        }).then(data => {
            const oldOrder = data.map(d => {return {name: d.name, address: d.address, postalCode: d.postalCode, city: d.city, telephone: d.telephone, products: d.products}});
            this.setState({ oldOrder });
            console.log(this.state.oldOrder, "this is the oldorder");
        });



    }

    getCart(){
        if(localStorage.getItem('products') == null) {
            console.log("Cart is empty")
            return [];
        }else {
            var cart = JSON.parse(localStorage.getItem('products'));
            return cart;
        }
    }

    getTel(){
        const user = JSON.parse(localStorage.getItem('user'));
        const userTel = user.telephone;
        return userTel;
    }
    

    constructor(props){
        super(props);
        this.state = {
            cart: [],
            oldOrder: []
        }
        // this.getTel = this.getTel.bind(this);
        this.getTel();
    };
    
    render () {
        
        return (
            <>
            <h1>Your Cart:</h1>
            <Link to="/cart/checkout"><button href="#" className="btn btn-success" onClick={() => console.log("clicked")  }>Go to checkout</button></Link>
            <CartViewHandler list = { this.state.cart } />
            <h1>Your old order(s)</h1>
            <OldOrderHandler list = {this.state.oldOrder } />
            </>
        )
    }

    
}

export default CartView;