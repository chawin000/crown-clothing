import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
);

function App() {
    return (
        <div className="App">
            <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
            {/*<Homepage/>*/}
        </div>
    );
}

export default App;
