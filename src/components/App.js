import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.css';
import {Header} from "./common/header/Header";
import {MainPage} from "./pages/main/MainPage";
import {DetailsPage} from "./pages/details/DetailsPage";

export class App extends PureComponent {
    render() {
        return <Router>
            <div className="app">
                <Header/>
                <main className="content">
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/beer/:id" component={DetailsPage}/>
                </main>
            </div>
        </Router>;
    }
}