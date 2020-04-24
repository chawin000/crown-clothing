import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Homepage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component";
import AuthorizationPage from "./pages/authorize/authorization.component";
import {auth} from "./firebase/firebase.utils";


class App extends Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({currentUser: user})
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/auth' component={AuthorizationPage}/>

                </Switch>

            </div>
        );
    }


}

export default App;
