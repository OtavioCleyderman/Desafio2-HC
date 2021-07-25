import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import ClientScreen from './Pages/Clients/ClientScreen'
import Home from './Pages/Home/Home';
import ProductScreen from './Pages/Products/ProductScreen'
import './globalStyles.css'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <div className="browser-container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/clients">
                        <ClientScreen />
                    </Route>
                    <Route exact path="/products">
                        <ProductScreen />
                    </Route>
                </Switch>

            </div>
            <Footer />
        </BrowserRouter>
    )
}