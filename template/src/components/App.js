import React from 'react';
import Banner from './Navbar/Banner';
import NavigationBar from './Navbar/Navbar';
import About from './About/About';
import Bundles from './Bundles/Bundles'
import ProductViewContainer from './Product/ProductViewContainer';
import ProductViewItemDetail from './Product/ProductViewItemDetails';
import CartView from './Cart/CartView';
import Checkout from './Checkout/Checkout';
import StorePickup from './Checkout/StorePickupForm';
import DeliveryForm from './Checkout/DeliveryForm';
import Confirmation from './Checkout/Confirmation';
import OrderComplete from './Checkout/OrderComplete';


import {Switch, Route} from 'react-router-dom';

const App = () => {
    return ( 
    <div>
        <Banner />
        <NavigationBar />
        <div className="container">
            <Switch>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/bundles" component={ Bundles } />
                <Route exact path="/bubbles" component={ ProductViewContainer }/>
                <Route exact path="/cart" component ={CartView} />
                <Route exact path="/cart/checkout" component ={Checkout} />
                <Route exact path="/cart/checkout/storepickup" component ={StorePickup} />
                <Route exact path="/cart/checkout/delivery" component ={DeliveryForm} />
                <Route exact path="/cart/checkout/confirm" component ={Confirmation} />
                <Route exact path="/cart/checkout/complete" component ={OrderComplete} />
                <Route exact path="/bubbles/:id" component={ ProductViewItemDetail }/>
                

                

            </Switch>
        </div>
    </div>
    );
};

export default App;
