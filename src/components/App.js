import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Actions } from '../store/index';
import './App.css';
import {Header} from "./common/header/Header";
import {MainPage} from "./pages/main/MainPage";
import {DetailsPage} from "./pages/details/DetailsPage";

function mapStateToProps(state) {
    return { is_init: state.is_init }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadData: Actions.beers_list.loadData
    }, dispatch);
}

class AppComponent extends PureComponent {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        console.log(this.props);

        return <Router>
            <div className="app">
                <Header/>

                <Route exact path="/" component={MainPage}/>
                <Route exact path="/details/:id" component={DetailsPage}/>
            </div>
        </Router>;
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);