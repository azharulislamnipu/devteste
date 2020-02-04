import React, { Component, Fragment } from 'react';
import './css/styles.scss';
import Home from '../src/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router} from "react-router-dom";
class App extends Component {
    render() {

        return (
            <Fragment>
                <Router>
                <Home/>
                </Router>
            </Fragment>
        );
    }
}

export default App;