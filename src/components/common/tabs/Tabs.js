import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import { default as MaterialTabs, Tab as MaterialTab } from 'material-ui/Tabs';
import './Tabs.css';

export class Tabs extends PureComponent {
    state = {
        index: this.props.index || 0
    };

    handleChange = (_, index) => {
        this.setState({ index });
    };

    handleChangeIndex = (index) => {
        this.setState({ index });
    };

    componentWillMount() {
        let {tabs, children} = this.props;
        children = React.Children.toArray(children);

        if (tabs.length !== children.length) {
           console.warn('Tabs component: number of tabs is not equal number of children');
        }
    }

    render() {
        const {tabs} = this.props;

        return <section>
            <AppBar position="static" color="default">
                <MaterialTabs
                    index={this.state.index}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    {tabs.map((title, index) => <MaterialTab key={index} label={title} />)}
                </MaterialTabs>
            </AppBar>
            <div className="tabs-content">
                <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                    {this.props.children}
                </SwipeableViews>
            </div>
        </section>;
    }
}

Tabs.propTypes = {
    index: PropTypes.number,
    tabs: PropTypes.array.isRequired,
    children: PropTypes.any.isRequired
};