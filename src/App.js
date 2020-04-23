import React from 'react';
import './App.css';

import {Route,Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Homepage from './pages/homepage/homepage.component';


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>

        </div>
    );
}

export default App;
