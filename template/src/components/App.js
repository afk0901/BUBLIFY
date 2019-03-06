import React from 'react';
import Banner from './Navbar/Banner';
import NavigationBar from './Navbar/Navbar';
import About from './About/About';
import Bundles from './Bundles/Bundles'

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
            </Switch>
        </div>
    </div>
    );
};

export default App;
