import React from 'react';
import NavigationBar from './Navbar/Navbar';
import About from './About/About';

import {Switch, Route} from 'react-router-dom';

const App = () => {
    return ( 
    <div>
        <NavigationBar />
        <div className="container">
            <Switch>
                <Route exact path="/about" component={ About }/>
            </Switch>
        </div>
    </div>
    );
};

export default App;
