import React, { PureComponent } from 'react';
import { Actions } from '../../../../store/index';
import {List} from "../../../common/list/List";
import {BeerItem} from "../../../common/items/beerItem/BeerItem";
import {LoadData} from "../../../hoc/loadData/LoadData";
import './Beers.css';

class BeersComponent extends PureComponent {
    render() {
        return <div className="beers-list">
            <List list={this.props.data}>
                {beer => <BeerItem beer={beer} />}
            </List>
        </div>;
    }
}

const options = {
    mapStateToProps: ({beers}) => ({data: beers}),
    loadAction: Actions.beers.loadData,
    checkDataExist: ({data}) => data && data.length,
};

export const Beers = LoadData(options)(BeersComponent);