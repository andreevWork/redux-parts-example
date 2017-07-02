import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../../../store/index';
import {List} from "../../../common/list/List";
import {BeerItem} from "../../../common/items/beerItem/BeerItem";

class BeersComponent extends PureComponent {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return <div>
            MainPage
            <br />
            <List list={this.props.beers}>
                {beer => <BeerItem beer={beer} />}
            </List>
        </div>;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadData: Actions.beers.loadData
    }, dispatch);
}

export const Beers = connect(
    ({beers}) => ({beers}),
    mapDispatchToProps
)(BeersComponent);