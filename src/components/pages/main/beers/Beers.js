import React, { PureComponent } from 'react';
import { Actions } from '../../../../store/index';
import {BeerItem} from "../../../common/list_items/beerItem/BeerItem";
import {LoadData} from "../../../hoc/loadData/LoadData";
import './Beers.css';
import {EmptyOrLoaderOrData} from "../../../common/emptyOrLoaderOrData/EmptyOrLoaderOrData";
import {List} from "../../../common/list/List";

class BeersComponent extends PureComponent {
    render() {
        const {is_pending, data} = this.props.data;
        const has_data = !!data && !!data.length;

        return <div className="beers-list">
            <EmptyOrLoaderOrData has_data={has_data} is_pending={is_pending}>
                <List data={data}>
                    {beer => <BeerItem beer={beer} />}
                </List>
            </EmptyOrLoaderOrData>
        </div>;
    }
}

const options = {
    stateToProps: state => state.beers,
    loadDataAction: () => Actions.beers.loadData(1),
    hasData: (props) => {
        const {data} = props;
        return data.data && data.data.length;
    },
};

export const Beers = LoadData(options)(BeersComponent);