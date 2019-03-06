import React from 'react';
import NavigationBar from './Navbar/Navbar';
import About from './About/About';
import ProductViewContainer from './Product/ProductViewContainer';


import {Switch, Route} from 'react-router-dom';

const App = () => {
    return ( 
    <div>
        <NavigationBar />
        <div className="container">
            <Switch>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/bubbles" component={ ProductViewContainer }/>
            </Switch>
        </div>
    </div>
    );
};

export default App;
